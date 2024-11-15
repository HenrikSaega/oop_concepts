class Student{
    #name
    #id
    #status
    constructor(name, id){
        this.#name = name
        this.#id = id
        this.#status = "Active"
    } 

        getId() 
        {
            return this.#id
        } 
        getName()
        {
            return this.#name
        } 
        getStatus(status)
        {
            return this.#status
        } 

        setName(name)
        {
            this.#name = name
        } 
        setStatus(status)
        {
            const statuses =["Active", "Expelled", "Finished", "Inactive"] 
            if(statuses.includes(status)){
                this.#status= status
            } 
        }   
} 


const student1 = new Student("John", 1)
console.log(student1)
console.log(student1.getName())
console.log(student1.getId())
student1.setName("Albert")
console.log(student1.getName())