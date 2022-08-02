const http = require("http");
const port = process.env.PORT || 3000;

let users = [
    { name: "Cory Hanson", email: "cory.hanson@example.com" },
    { name: "Ryan Sullivan", email: "ryan.sullivan@example.com" },
    { name: "Darrell Jackson", email: "darrell.jackson@example.com" },
    { name: "Marion Harris", email: "marion.harris@example.com" },
    { name: "Kent Medina", email: "kent.medina@example.com" },
    { name: "Crystal Hall", email: "crystal.hall@example.com" },
    { name: "Ann Jackson", email: "ann.jackson@example.com" },
    { name: "Felecia Alvarez", email: "felecia.alvarez@example.com" },
    { name: "Devon Kim", email: "devon.kim@example.com" },
    { name: "Taylor Black", email: "taylor.black@example.com" }
]

const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'application/json');
    if (req.url === "/") {
        res.statusCode = 200;
        res.end(JSON.stringify(users));
    }
    else {
        res.statusCode = 404;
        res.end();
    }
});

server.listen(port, () => { console.log(`server listening on http://localhost:${port}`); });