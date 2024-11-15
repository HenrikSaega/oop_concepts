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

const shape1 = new Shape('red')
console.log('Shape color: ' + shape1.getColor());
console.log('Shape area: ' + shape1.getArea());