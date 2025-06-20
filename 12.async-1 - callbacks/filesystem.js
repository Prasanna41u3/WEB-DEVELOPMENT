const fs = require('fs')

console.log("before...")

// const content = Math.random()
//      .toString()
//      .repeat(100);
// fs.writeFileSync('file1.js', content)

// let data1 = fs.readFileSync('file1.js')
// let data2 = fs.readFileSync('file2.js')
// console.log(data1.toString())
// console.log(data2.toString())

fs.readFile('file1.js',function (err,data) {
    if(err) {
        // ...
    } else {
        console.log("file1 data",data.toString())
    }
})
console.log("after")