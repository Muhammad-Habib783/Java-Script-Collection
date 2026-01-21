/* datatypes and variables in javascript

console.log("This is the first file.");
age = 34;// let allows reassignment

console.log("Age:", age);
console.log("End of first.js");

let x = BigInt(9007199254741991);
let y=Symbol("id123");

const product  = 
{
    name: "pen",
    price: 10,
    rating : 7002,
    offer : 5,
};
console.log("Product:", product);

const profile = {
    name: "John Doe",
    followers: 1500,
    isfollow : true,
    bio : null,
};
console.log("Profile:", profile);
console.log( typeof profile['name']); */

//===============================================================================
 // operators and conditional statements in javascript

 // comments in javascript
    //console.log("This is the first file.");
    /* multiline comment */

    // Arithmetic operators in javascript
    // let a = 10;
    // let b = 5;
    //console.log("a + b =", a + b); // addition
    // console.log("a - b =", a - b); // subtraction
    // console.log("a * b =", a * b); // multiplication
    // console.log("a / b =", a / b); // division
    // console.log("a % b =", a % b); // modulus
    // console.log("a ** b =", a ** b); // exponentiation // 10^5 = 100000
    // console.log("++a =", ++a); // pre-increment
    // console.log("--b =", --b); // pre-decrement
    // console.log("a++ =", a++); // post-increment
    // console.log("b-- =", b--); // post-decrement
    
// unary operators
// console.log("a=",a,", b=",b);
// a=a+1; // a +=1
// console.log(a);
    
// comparison operators
// console.log("a == b:", a == b); // equal to
// console.log("a != b:", a != b); // not equal to
// console.log("a === b:", a === b); // strict equal to
// console.log("a !== b:", a !== b); // strict not equal to
// console.log("a > b:", a > b); // greater than
// console.log("a < b:", a < b); // less than
// console.log("a >= b:", a >= b); // greater than or equal to
// console.log("a <= b:", a <= b); // less than or equal to

// let c=15;
// let d="15";
// console.log("c == d:", c == d); // equal to
// console.log("c === d:", c === d); // strict equal to

// strict equality operator checks both value and data type


// logical operators
// let p = 6;
// let q = 5;
// console.log("(p > q) && (p != q):", (p > q) && (p != q)); // logical AND
// console.log("(p > q) || (p == q):", (p > q) || (p == q)); // logical OR
// console.log("!(p > q):", !(p > q)); // logical NOT

// conditional statements

// let age = 25;
// if (age >= 18) {
//     console.log("you can vote");
// }
// if (age < 18) {
//     console.log("you cannot vote");
// } 

// let  mode = "dark";
// let color;
// if (mode === "dark") {
//     color = "black";
// }
// else {
//     color = "white";
// }
// console.log("Color is:", color);

// even odd program
// let number = 7;
// if (number % 2 === 0) {
//     console.log(number, "is even");
// }
// else {
//     console.log(number, "is odd");
// }

// // syntax -> rules to write code
// // semantics -> meaning of the code

// // if - else if - else ladder
// let marks = 85;
// if (marks >= 90) {
//     console.log("Grade A");
// }
// else if (marks >= 75) {
//     console.log("Grade B");
// }
// else if (marks >= 60) {
//     console.log("Grade C");
// }
// else {
//     console.log("Grade F");
// }

// // ternary operator or conditional operator
// let age =25;
// let result = age >= 18 ? "adult" : "not adult";   
// console.log( result);

// // switch program
// let day = 3;
// switch(day) 
// {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid day");
// }

// end of switch program
// alert("Welcome to javascript programming");
// let name = prompt("Enter your name:");
// console.log(name);

////////////////////////////////////////
// let number = prompt("Enter a number");

// if(number % 5 === 0) {
//     console.log(number, "is divisible by 5");
// }
// else {
//     console.log(number, "is not divisible by 5");
// }

// grade to student 

// let percentage=prompt("Enter your percentage:(0-100)");
// if(percentage >=80 && percentage <=100){
//     console.log("Grade A");
// }
// else if(percentage >=70 && percentage <=89)
//     {
//     console.log("Grade B");
//     }
// else if(percentage >=60 && percentage <=69)
//     {
//     console.log("Grade C");
//     }
// else if(percentage >=50 && percentage <=59)
//     {
//     console.log("Grade D");
//     }
// else if(percentage >=0 && percentage <=49)
//     {
//     console.log("Grade F");
//     }
// else{
//     console.log("Invalid percentage");
// }
// end of grade to student

//  loops and strings in javascript

// 

// for loop
// let sum =0;
// let n=5;
// for (let i = 1; i <= n; i++) 
//     {
//         sum = sum+i;
//     }
// console.log("Sum of first 5 natural numbers is:", sum);

// for loop
// for(let i=1; i<=5; i++)
//     {
//         console.log("i", i);
//     }
    // infinite loop
//  for(let i=1;i>=0;i++)
//     {
//         console.log("Hello");
//     }

// while loop
// let i =1;
// while(i<=5)
//     {
//         console.log("i:", i);
//         i++;
//     }
// do while loop
// let j =1;
// do {
//     console.log("j:", j);
//     j++;
// } while(j<=5);

// for off loop // used for strings and arrays
// let str="Hello";
// let size=0;
// for (let i of str) {
//     console.log("i:", i);
//     size++;
// }
// console.log("Size of string is:", size);

// for in loop //  used for objects
// let student = {
//     name: "Alice",
//     age: 20,
//     cgpa: 8.5,
//     ispassed: true
// };
// for(let key in student)
//     {
//         console.log("key", key, ", value:", student[key]);
//     }

// print all even numbers from 0 to 100
// for(let i=0;i<=100;i++)
//     {
//         if(i%2===0)
//             {
//                 console.log(i);
//             }
//     }

// end of even numbers program

// guess the game number program
// let gamenumber =25;
// let usernum=prompt("Guess the game number");
// console.log("User number is:", usernum);
// while(usernum != gamenumber)
//     {
//     usernum=prompt("you entered wrong number guess the game number again:");
//     }
//     console.log("Congratulations! You guessed the correct number.");

    // end of guess the game number program

// strings in javascript
// let str = "hello world";
// let str2 = 'javascript programming';
// console.log("String 1:", str);
// console.log("String 2:", str2);
// console.log("Length of str1:", str.length);

// // string indices 
// console.log("First character of str1:", str[0]);
// console.log("Last character of str1:", str[str.length - 1]);
// console.log("Character at index 4 of str2:", str2.charAt(4));

// let obj = {
//     name: "Bob",
//     price: 30,
//     rating: "New York"
// };
// console.log("Object:", obj.name);

// template literals

// let specialString = `Alice`;
// console.log(typeof specialString);

// let output = `the cost of ${obj.name} is ${obj.price} with a rating of ${obj.rating}`;
// console.log(output);

// end of template literals
// string methods

// let str = "  Hello JavaScript Programming  ";
// let newStr=str.toUpperCase();
// console.log("Original string:", str);
// console.log("Uppercase string:", newStr);

// lower case
// let str = "  Hello JavaScript Programming  ";
// let newStr=str.toLowerCase();
// console.log("Original string:", str);
// console.log("Lowercase string:", newStr);

// trim case 
// let str2 = "  Hello JavaScript Programming  ";
// console.log(str2.trim());

// slice case
// let str2 = "  Hello JavaScript Programming  ";
// let slicedStr=str2.slice(2);
// console.log("Sliced string:", slicedStr);

// concatenation case 

// let str1 = "Hello ";
// let str3 = "World!";
// let res=str1.concat(str3);
// console.log("Concatenated string:", res);
// end of string methods

// // also from str1 + str2 can be used for concatenation
// let str1 = "Hello ";
// let str3 = "World!";
// let res="I want to ask you " + str1 + str3;
// console.log("Concatenated string:", res);

// replace method
// let str = "Hello World! Welcome to the World of JavaScript.";
// console.log(str.replace("World", "Universe"));

// let str = "Hello World! Welcome to the World of JavaScript.";
// console.log(str.replaceAll("World", "Universe"));

// // character at 

// let string = "JavaScript";
// console.log("Character at index 4 is:", string.charAt(4));
// end of character at

// string program 

// let username=prompt("\n Enter your full name :");
// let res ="@"+username+username.length
// console.log(res);


// Arrays in javascript
// let fruits = ["Apple", "Banana", "Orange", "Mango"];
// console.log("Fruits array:", fruits);

// let numbers = [10, 20, 30, 40, 50];
// console.log("Numbers array:", numbers);

// let mixedArray = ["Hello", 100, true, null, undefined, {name: "Alice"}, [1, 2, 3]];
// console.log("Mixed array:", mixedArray);


// let  heroes = ["Superman", "Batman", "Wonder Woman", "Spiderman"];
// console.log("First hero:", heroes[0]);


// print all the lements of array 
// let numbers = [10, 20, 30, 40, 50];   
// for (let i = 0; i < numbers.length; i++) {
//     console.log("Number at index", i, "is:", numbers[i]);
// }

// for off loop
// let numbers = [10, 20, 30, 40, 50];
// for ( let num of numbers) {
//     console.log("Number:", num);
// }

// array program 

// let marks=[85, 97, 44, 37, 76, 60];
// sum=0;
// for(let mark of marks)
//     {
//         sum=sum+mark;
//     }
//     let avg=sum/marks.length;
//     console.log(`Average marks of class = ${avg}`);
// end of array program


// array program 
// let items =[250, 645, 300, 900, 50];
// let idx=0;
// for(let item of items)
// {
//     let offer=item/10; // 10% offer
//     item = item - offer;
//     items[idx]=item;
//     idx++;
// }
// console.log("Items after discount:", items);
// end of array program

// array methods in javascript

// let vegetables = ["Carrot", "Potato", "Tomato"];
// // push method
// vegetables.push("Cabbage", "Onion", "Spinach");
// console.log("Vegetables after push:", vegetables);

// pop method
// let vegetables = ["Carrot", "Potato", "Tomato"];
// console.log("Vegetables before pop:", vegetables);
// let removedVegetable = vegetables.pop();
// console.log("Vegetables after pop:", vegetables);
// console.log("Removed vegetable:", removedVegetable);

// tostring method
// let fooditems = ["Pizza", "Burger", "Pasta"];
// console.log(fooditems);
// console.log(fooditems.toString());
// console.log(fooditems);

// concat method

// let fooditems = ["Pizza", "Burger", "Pasta"];
// let drinks = ["Coke", "Pepsi", "Sprite"];
// let fruits =["Carrot", "Potato", "Tomato"];

// let res=fooditems.concat(drinks, fruits);
// console.log(res);

// un shift method
// let heroes = ["Superman", "Batman", "Wonder Woman", "Spiderman"];
// heroes.unshift("Ironman", "Thor");
// console.log("Heroes after unshift:", heroes);

// shift method

// let heroes2 = ["Superman", "Batman", "Wonder Woman", "Spiderman"];
// let valheroes2 = heroes2.shift();
// console.log("deleted", heroes2);

// slice method
// let heroes3 = ["Superman", "Batman", "Wonder Woman", "Spiderman", "Ironman", "Thor"];

// console.log(heroes3);
// console.log(heroes3.slice(2,5)); // from index 2 to index 4

// splice method

// let arr =[1,2,3,4,5,6,7];
// arr.splice(2,2,101,102);

// add element 
// arr.splice(2,0,101,102);

// delete element
// arr.splice(3,1);

// replace element
// arr.splice(3,1,101);


// example program of array 

// let arr=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

// //arr.shift(); // remove Bloomberg
// //arr.splice(2,1,"Ola");// replace Uber with Ola
// arr.push("Amazon");// add Amazon at the end

//=================================================================================

// functions in javascript

// function myFunction() {
//     console.log("This is my first function.");
//     console.log("Function execution completed.");
// }

// myFunction(); // function call

// function with parameters
// function myfunction(msg)
// {
//     console.log(msg);
// }
// myfunction("Hello from function with parameters!");

// function with return type 
// function add(a, b) 
// {
//     let s=a+b;
//     return s;
// }
// let sum = add(10, 20);
// console.log("Sum is:", sum);

// arrow function


// const sumArrow = (a, b) => {
//     return a + b;
// };
// let result = sumArrow(15, 25);
// console.log("Result from arrow function:", result);

// const multiplication=(x,y) =>
// {
//     return x*y;
// }
// let res=multiplication(5,6);
// console.log("Multiplication result is:", res);

// function example program

// function countvowels(str)
// {
//     let count=0;
//     for(const char of str)
//     {
//     if(char==='a' || char==='e' || char==='i' || char==='o' || char==='u' ||
//        char==='A' || char==='E' || char==='I' || char==='O' || char==='U' )
//        {
//         count++;
//        }
//        else{
//         continue;
//        }
     
//     }
//     return count;
// }
// let string=prompt("Enter a string to count vowels:");
// let vowelcount=countvowels(string);
// console.log(`Number of vowels in the string is: ${vowelcount}`);


// arrow function example program

// const countVow = (str) =>
// {
//     let count=0;
//     for(const char of str)
//     {
//     if(char==='a' || char==='e' || char==='i' || char==='o' || char==='u' ||
//        char==='A' || char==='E' || char==='I' || char==='O' || char==='U' )
//        {    
//         count++;
//        }
//          else{
//         continue;
//        }
//     }
//     return count;
// }
// let string=prompt("Enter a string to count vowels:");
// let vowelcount=countVow(string);
// console.log(`Number of vowels in the string is: ${vowelcount}`);


// for each loop in arrays in javascript

// let arr = [1,2,3,4,5];

// arr.forEach(function printValue(value)
// {
//     console.log(value);
// });

// 

// let arr = [1,2,3,4,5];

// arr.forEach((value) => 
//     {
//     console.log(value);
// });

// example program

// let arr = ["islamabad", "karachi", "lahore", "peshawar", "quetta"];

// arr.forEach((val,idx,arr) =>
//     {
//     console.log(val.toUpperCase(),idx,arr);
//     });// end of for each loop example

// for web development interview questions its important to know about for each loop
// for each is las known as higher order function because it takes another function as input or higher order method 


// let nums = [2,3,4,5,6];


// let calculatsquare=(num) => // here is our arrow function
// {
//     console.log(num * num);
// }
// nums.forEach(calculatsquare); // here is the higher order function

// end of for each loop in arrays in javascript

// SOME MORE ARRAY METHODS
// map method

// let numbers = [1, 2, 3, 4, 5];

// let newarr=numbers.map((val) => {
//     return val;});
//     console.log(newarr);

    // filter method
// let  arr = [10, 15, 20, 25, 30, 35, 40];

// let newfilterarr = arr.filter((val) =>
// {
//     return val%2==0;
// });
// console.log("Filtered array:", newfilterarr);


// reduce method

// let arr = [1, 2, 3, 4]; // sum is 10

// const output = arr.reduce((res,curr)=> // res + curr is same as res= res + curr
// {
//     return res + curr; // return the sum to res until all elements are processed
// });
// console.log("Reduced sum is:", output); // end of reduce method

// practice program 

// let marks = [97,64,32,49,99,96,86];

// let topstudents=marks.filter((val)=>
// {
//     return val >90;
// });
// console.log("Top students marks are:", topstudents);


// second practice program

// let n=prompt("\n Enter a number ");
// let arr =[];
// for(let i=1;i<=n;i++)
// {
//     arr[i-1]=i;
// }
//console.log(arr);

// q1
// let sum =arr.reduce((res,curr)=>
// {
//  return res+curr;
// });
// console.log("\n  sum is :",sum);

// q2

// let factorial = arr.reduce((res,curr)=>
// {
//  return res*curr;
// });
// console.log("\n  Factorial is :",factorial);
// end of practice program
