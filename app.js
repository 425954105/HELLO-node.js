//=====================================================IO操作

var fs = require('fs')

//异步IO操作，回调函数延迟执行
var readMe = fs.readFile("readMe.txt", "utf8", function (err, data) {
    console.log(data)
})

console.log(readMe)

console.log("finished")

// fs.writeFileSync("writeMe.txt", "hello world")

//=====================================================

//=====================================================   事件
//http://www.runoob.com/nodejs/nodejs-event.html

// var events = require('events')
// var util = require('util')//引入工具库

// var Person = function (name) {//注册类
//     this.name = name
// }

// util.inherits(Person, events.EventEmitter)//继承事件

// var xiaoming = new Person('xiaoming')
// var lili = new Person('lili')
// var lucy = new Person('lucy')

// var person = [xiaoming, lili, lucy]

// person.forEach(function (person) {
//     person.on('speak',function (message) {
//         console.log(person.name + " said: " + message)
//     })
// })
// xiaoming.emit('speak', 'hi')
// lucy.emit('speak', 'I want a curry')

//=====================================================
// var myEmitter = new events.EventEmitter()

// myEmitter.on('someEvent', function (message) {
//     console.log(message)
// })

// myEmitter.emit('someEvent', 'the event was emitted')


// var stuff = require('./count')

// var pi = require('./count').pi

// console.log(stuff.counter(['ruby', 'node.js', 'react']))
// console.log(stuff.adder(3))
// console.log(pi)



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