var fs = require('fs')

function home(response) {
    response.writeHead(200, { 'Conuntent-Type': 'text/html' })
    fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(response)
}

function review(response) {
    response.writeHead(200, { 'Conuntent-Type': 'text/html' })
    fs.createReadStream(__dirname + '/review.html', 'utf8').pipe(response)
}

function api_records(response, params) {
    response.writeHead(200, { 'Conuntent-Type': 'application/json' })
    response.end(JSON.stringify(params))
}

module.exports = {
    home,
    review,
    api_records
}