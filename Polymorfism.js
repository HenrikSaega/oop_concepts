class Circle{
    corners(){
        console.log("Circle doesn't have corners");
    } 
    sides(){
        console.log("Circle has one side");
    } 
} 
class Rectangle{
    corners(){
        console.log("Rectangle has four corners");
    } 
    sides(){
        console.log("Rectangle has four sides");
    } 
} 

const cornersTest = (shape) =>{
    shape.corners()
} 

const firstShape = new Circle();
const secondShape = new Rectangle();

cornersTest(firstShape);
cornersTest(secondShape);