var http = require('http')

var server = http.createServer(function (req, res) {
  console.log("== Request received")
  console.log("  -- URL:", req.url)
  console.log("  -- Method:", req.method)
  console.log("  -- Headers:", req.headers)

  var responseBody = "<html>"
  responseBody += "<head>"
  responseBody += "<link rel='stylesheet' href='/style.css'>"
  responseBody += "</head>"
  responseBody += "<body>"
  responseBody += "<h1>Hello world!</h1>"
  responseBody += "<p>You asked for this page: " + req.url + "</p>"
  responseBody += "</body>"
  responseBody += "</html>"

  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.write(responseBody)
  res.end()
})

var port = 3567
server.listen(port, function () {
  console.log("== Server is listening on port", port)
})
