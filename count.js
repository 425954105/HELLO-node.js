var adder = function (a) {
    return `the sum of the 2 numbers is ${a+pi}`
}

var pi = 3.14

module.exports = {
    counter:function () {
        return "Threre are " + Array.length + " elements in the array"
    },
    adder,
    pi
}
// module.exports.counter = counter
// module.exports.adder = adder
// module.exports.pi = pi