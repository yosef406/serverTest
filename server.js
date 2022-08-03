const http = require("http");
const data = require("./data/data");
const fs = require("fs");

const port = process.env.PORT || 3000;

let users = [];

const server = http.createServer((req, res) => {
    users = data;
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'application/json');
    if (req.url === "/" && req.method === "GET") {
        res.statusCode = 200;
        res.end(JSON.stringify(users));
    }
    else if (req.url === "/" && req.method === "PUT") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString();
        });

        req.on("end", () => {
            const { name, email } = JSON.parse(body);
            users.push({ name, email });

            fs.writeFileSync("./data/data.json", JSON.stringify(users), "utf8", (err) => {
                if (err) {
                    console.log(err);
                }
            });

            res.writeHead(201, { "Content-Type": "application/json" });
            return res.end("done");
        });
    }
    else {
        res.statusCode = 404;
        res.end();
    }
});

server.listen(port, () => { console.log(`server listening on http://localhost:${port}`); });