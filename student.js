class Student{
    constructor(firstname, lastname, age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    } 
}
class Person{
    constructor(){
        this.firstname = "";
        this.lastname = "";
        this.age = 0;
    } 
}

const person1 = new Person("Juhan", "Mardi", 20);
const person2 = new Person("Mari", "Liisi", 18);
const person3 = new Person("Kristo", "Toop", 32);

const student1 = new Student("Henrik", "Saega", 20);
const student2 = new Student("Laur", "Sulg", 23);
const student3 = new Student("Annika", "Kimbu", 24);

console.log(person1);
console.log(person2);
console.log(person3);

console.log(student1);
console.log(student2);
console.log(student3);