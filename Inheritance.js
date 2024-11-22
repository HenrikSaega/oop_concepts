class Shape{
    #color 
    constructor(color){
        this.#color = color;
    } 

    setColor(color){
        this.#color = color;
    } 
    
    getColor(){
        return this.#color;
    } 
    getArea(){
        return null;
    } 
} 

class Circle extends Shape{
    #radius
    constructor(color, radius){
        super(color);
        this.#radius = radius
    }
    getArea(){
        return Math.PI * Math.pow(this.#radius, 2)
    }
    print(){
        return `Circle (r: ${this.#radius}, color: ${this.getColor()})`
    }
}

class Square extends Shape{
    #side
    constructor(color, side){
        super(color)
        this.#side = side
    }
    getArea(){
        return Math.pow(this.#side, 2)
    }
    print(){
        return `Square (a: ${this.#side}, color: ${this.getColor()})`
    }
}

class Rectangle extends Shape{
    #length
    #width
    constructor(color, length, width){
        super(color)
        this.#length = length
        this.#width = width
    }
    getArea(){
        return (this.#length * this.#width)
    }
    print(){
        return `Rectangle (l: ${this.#length},, w: ${this.#width} color: ${this.getColor()})`
    }
}

class Paint{
    constructor(){
        this.shapes = []
    }

    addShapes(shape){
        return this.shapes.push(shape)
    }

    getShapes(){
        return this.shapes
    }
    calculateTotalArea(){
        this.totalArea = 0
        this.shapes.forEach(shape => {
            this.totalArea += shape.getArea()
        })
        return `Total are of shapes: ${Math.round(this.totalArea)}`
    }
    getCircles(){
        this.circles = []
        this.circles = this.shapes.filter(shape => shape.constructor.name == "Circle")
        return this.circles
    }
    getSquares(){
        this.squares = []
        this.squares = this.shapes.filter(shape => shape.constructor.name == "Square")
        return this.squares
    }
    getRectangles(){
        this.rectangles = []
        this.rectangles = this.shapes.filter(shape => shape.constructor.name == "Rectangle")
        return this.rectangles
    }
}

const shape1 = new Shape('red')
const circle1 = new Circle("yellow", 2)
const square1 = new Square("blue", 5)
const rectangle1 = new Rectangle("green", 2 , 3)
const paint1 = new Paint()
paint1.addShapes(shape1)
paint1.addShapes(circle1)
paint1.addShapes(square1)
paint1.addShapes(rectangle1)

console.log('Shape color: ' + shape1.getColor());
console.log('Shape area: ' + shape1.getArea());
console.log()
console.log('Circle color: ' + circle1.getColor());
console.log('Circle area: ' + circle1.getArea());
console.log(circle1.print())
console.log()
console.log('Square color: ' + square1.getColor());
console.log('Square area: ' + square1.getArea());
console.log()
console.log('Rectangle color: ' + rectangle1.getColor());
console.log('Rectangle area: ' + rectangle1.getArea());
console.log()
console.log(paint1)
console.log(paint1.getShapes())
console.log()
console.log(paint1.calculateTotalArea())
console.log()
console.log(paint1.getCircles())
console.log(paint1.getSquares())
console.log(paint1.getRectangles())
console.log()

paint1.getCircles().forEach(shape => console.log(shape.print()))
paint1.getSquares().forEach(shape => console.log(shape.print()))
paint1.getRectangles().forEach(shape => console.log(shape.print()))