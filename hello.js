console.log("Hello world!")

function foo() {
  console.log("== inside foo()")
}

foo()

console.log("== process.env:", process.env)
console.log("== process.env.HOME:", process.env.HOME)
console.log("== process.env.SOME_ENV_VARIABLE:", process.env.SOME_ENV_VARIABLE)

console.log("== __dirname:", __dirname)
console.log("== __filename:", __filename)

// var circumference = require('./circle')
// console.log("== circumference:", circumference)
// console.log("== circumference(5):", circumference(5))

var circle = require('./subdir/circle')
console.log("== circle:", circle)
console.log("== circle.circumference(5):", circle.circumference(5))
console.log("== circle.area(5):", circle.area(5))

var figlet = require('figlet')
figlet("Hello CS 290!!", function (err, asciiArt) {
  if (!err) {
    console.log(asciiArt)
  }
})
