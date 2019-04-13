var stuff = require('./count')

var pi = require('./count').pi

console.log(stuff.counter(['ruby', 'node.js', 'react']))
console.log(stuff.adder(3))
console.log(pi)
// console.log(__dirname)
// console.log(__filename)

// var time = 0

// var timer = setInterval(() => {
//     time += 2
//     console.log(time + " seconds have passed")
//     if (time > 5) {
//         clearInterval(timer)
//     }
// },3000)

// function sayHi() {
//     console.log('Hi')
// }

// sayHi()

// function callFunction(fun,name) {
//     fun(name)
// }

// var sayBay = function (name) {
//     console.log(name + 'Bye')
// }

// callFunction(sayBay, 'rails365')