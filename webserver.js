var http = require('http')
var fs = require('fs')
var url = require('url')
var querystring = require('querystring')

function startServer(route, handle) {
    var onRequest = function (request, response) {
        var pathname = url.parse(request.url).pathname
        console.log('Request received ' + pathname)
        var data = ""
        request.on("error", function (err) {
            console.error(err)
        }).on("data", function (chunk) {
            data += chunk
        }).on('end', function () {
            if (request.method === "POST") {
                route(handle, pathname, response, querystring.parse(data))
            } else {
                var params = url.parse(request.url, true).query
                route(handle, pathname, response, params)
            }
        })


        /*处理路由过程原版
        if (request.url === '/' || request.url === '/home') {//请求主页
            response.writeHead(200, { 'Countent-Type': 'text/html' })
            var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8')
            // response.write('Hello from out application')
            myReadStream.pipe(response)
        } else if (request.url === '/review') {//请求内页
            response.writeHead(200, { 'Conuntent-Type': 'text/html' })
            fs.createReadStream(__dirname + '/review.html', 'utf8').pipe(response)
        } else if (request.url === '/api/v1/records') {//请求json
            response.writeHead(200, { 'Conuntent-Type': 'application/json' })
            var jsonObj = {
                name: "hfpp2012",
                job: "programmer",
                age: 27
            }
            response.end(JSON.stringify(jsonObj))
        } else {//跳转404
            response.writeHead(200, { 'Content-Type': 'text/html' })
            fs.createReadStream(__dirname + '/404.html', 'utf8').pipe(response)
        }
        */
    }

    var server = http.createServer(onRequest)

    server.listen(3000, '127.0.0.1')
    console.log('Server start on localhost port 3000')
}


module.exports.startServer = startServer