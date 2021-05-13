var fs = require('fs')

fs.readFile('hello.js', 'utf8', function (err, data) {
  if (err) {
    throw err
  }
  console.log("== file contents:", data)
})

// var fileContents = fs.readFileSync('hello.js', 'utf8')
// console.log("== file contents:", fileContents)

var four = 2 + 2
var five = four + 1
var ten = five * 2
console.log("== ten:", ten)
