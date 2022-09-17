import http from "http";

const server = http.createServer((req, res) => {
  console.log(req);

  res.end("Hello World 2");
});

server.listen(8080);
