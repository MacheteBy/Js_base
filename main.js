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

const students = {}  // new Object
const array = []  // new Array()

// new Function()
// new Map()
// new Date()