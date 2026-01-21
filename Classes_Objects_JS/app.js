// how to create and object in js without class
const student =
{
    name: "John Doe",
    age: 20,
    marks :94.4,
    printMarks: function() 
   {
        console.log("marks = ",this.marks);
    }
};


const employee = 
   {
    calcTax()
    {
        console.log("tax rate is 10%");
    }
};

const alikhan = 
{
    salary: 50000,
    calcTax()
    {
        console.log("tax rate is 20%");
    }
};

alikhan.__proto__ = employee;

////////////////////////////////////////////////////////////////

// how to create object using class in js

class Car 
{
    constructor(brand,mileage)
    {
        console.log("creating new object");
        this.brand = brand;
        this.mileage = mileage;
    }
    start()
    {
        console.log("start");
    }

    stop()
    {
        console.log("stop");
    }

}

let fortuner = new Car("Toyota Fortuner",10);
console.log(fortuner);
let bmw = new Car("BMW X5",12);
console.log(bmw);


// INHERITANCE IN JS CLASS

class parent
{
    hello()
    {
        console.log("hello");
    }
}
class child extends parent
{
}
let obj = new child();
obj.hello();

// Super keyword in js class

class Person
{

    constructor(name)
    {
     this.species = "homo sapiens";   
     this.name=name;
    }
    eat()
    {
        console.log("eating...");
    }
}

class Engineer extends Person
{
    constructor(name)
    {
        super(name); // to invoke parent class constructor
    }
    work()
    {
        super.eat();
        console.log("solve problems, build solutions...");
    }
}

let engobj = new Engineer("ABHI");


//////////////////////////////////////////////////////

// practice question 

let Data = "Secure informatiion";
class User
{
    constructor(name, email)
    {
        this.name = name;
        this.email = email;
    }

    viewData()
    {
        console.log("data = ",Data);
    }
}
class Admin extends User
{
    constructor(name, email)
    {
        super(name, email);
    }
    editData()
    {
        Data = "some new value";
        console.log("editing data...");
    }
}
let student1 = new User("ALI", "ali@gmail.com");
let student2 = new User("ABHI", "abhi@gmail.com");
let teacher1 = new User("Dean", "dean@gmail.com");

let admin1 = new Admin("Admin", "admin@college.com");

///////////////////////////////////////////////////////

// error handling in js class

let a=10;
let b=0;
console.log("a = ",a);
console.log("b = ",b);
console.log("a+b = ",a+b);
console.log("a+b = ",a+b);
console.log("a+b = ",a+b);
try {
console.log("a+b = ",a+c); // this will throw error
} catch (err) 
{
    console.log(err);
}
console.log("a+b = ",a+b);
console.log("a+b = ",a+b);
console.log("a+b = ",a+b);
console.log("a+b = ",a+b);





