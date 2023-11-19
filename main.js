// примитивные виды данных в JS
// string => string
// number => number, NaN, Infinity
// boolean => true, false
// null => null
// undefined => undefined

let x;
console.log(x);

const func = (a, b) => {
    console.log(b);
    return a + b;
}
console.log(func(1, '1'))

console.log()

// объекты:
// object, array, function
// сложный тип данных
// имеют свойства и методы

const obj = {name: "Alex"}
const newObj = obj
newObj.name = "Bob"
console.log(obj.name);

const stydent = {
    name: "Alex",
    age: 23,
    isMarried: true
}

const student = {}  // new Object
const array = []  // new Array()

// new Function()
// new Map()
// new Date()










// второе занятие по JS


const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];


console.log(students.map(elem => elem.name))
console.log(students.map(elem => ({...elem, isMarried: true})))



const numbers = [1, -2, -3, 4];

const getNumbers = (array) => {
  const newArray = [];
  array.map((item) => {
    if (item >= 0) {
      newArray.push(item * 2);
    }
  });
  console.log(newArray);
};

getNumbers(numbers);

console.log(numbers.map(elem => elem >= 0 ? elem * 2 : ''))

