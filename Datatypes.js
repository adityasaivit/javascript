console.log("Adithya Sai");
// types of datatypes

// 1.primitive datatypes
// 2.Reference datatypes

// primitive

// 1.String -sequence of charecters
// 2.NUmber -intefers as well as the floating
// 2.boolean -logical entity true/false
// 3.null -intentional abcence of the element
// 4.undefined -a variable whoch has not been defined
// 5.symbol -a built in object ehose constructor will return an symbol
// 6.Bigint -Numbers greater then the Number type can handle

// Reference Datatypes

// object,literals,arrays and function

// javascript is an dynamically typed language
// we need not define the datatype of a variable

const firstname='aditya';
console.log(firstname,typeof firstname)
const output=firstname;

const age=30;
console.log(age,typeof age)

const temp=99.9;
console.log(temp,typeof temp)


// boolean

const bool=true;
console.log(bool,typeof bool)
// null

const out=null;

console.log(out,typeof out)
// null was displayed as the object not as primitive
// null was displayed as the object as NULL is used to represent the 0,null and 0x00

let l;
console.log(l,typeof l);

// symbol

const id=Symbol('id');
console.log(id,typeof id)

// bigint

const phno=90002597989000259798n;
// n at the end will represent the bigint

console.log(phno,typeof phno)


// reference variables

const numbers=[1,2,3,4];
console.log(numbers,typeof numbers)

const ob={
    name:"adithya sai",
    age:20
};
console.log(ob,typeof ob)

function hello()
{
    console.log("hello world")
}
console.log(hello,typeof hello)

// primitive and reference types
// primitive datatypes were stored in the stack 
// reference datatypes were stored in the heap


// for reference variable the name was stored in the stack and the value was stored in the heap



