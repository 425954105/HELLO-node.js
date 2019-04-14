//流处理
var fs = require('fs')

//创建读取流
var myReadStream = fs.createReadStream(__dirname + 'readMe.txt')

myReadStream.on('data', function (chunk) {
    console.log('new chunk received')
    console.log(chunk)
})