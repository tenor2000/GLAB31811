const http = require("http");
const url = require("url");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  switch (pathname) {
    case "/":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.write("<h1>Welcome Home</h1>\n");
      res.end();
      break;
    case "/about":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.write("<h1>Welcome to About</h1>\n");
      res.end();
      break;
    case "/contact":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.write("<h1>Welcome Contact</h1>\n");
      res.end();
      break;
    case "/purchase":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.write("<h1>Welcome to Purchase</h1>\n");
      res.end();
      break;
    default:
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/html");
      res.write("<h1>404: You are not welcome here</h1>\n");
      res.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
