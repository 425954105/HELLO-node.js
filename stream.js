//流处理
var fs = require('fs')

//创建读取流
var myReadStream = fs.createReadStream(__dirname + '/readMe.txt')
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt')

myReadStream.pipe(myWriteStream)

/*
var writeData = "hello world"
myWriteStream.write(writeData, 'utf8')
myWriteStream.end()
myWriteStream.on('finish', function () {
    console.log('finished')
})
*/


/*
myReadStream.setEncoding('utf8')

var data = ""

myReadStream.on('data', function (chunk) {
    // data += chunk
    myWriteStream.write(chunk)
})

myReadStream.on('end', function () {
    console.log(data)
})*/