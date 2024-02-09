console.log("Web serverni boshlash");
const express = require("express");
const res = require("express/lib/response")
const app = express();
const http = require("http");
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if (err) {
        console.log("ERROR:", err );
    } else {
        user = JSON.parse(data);
    }
});

// 1) Kirish ko'dlari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// 2); Sessions
// 3) Views code
app.set("views", "views");
app.set("view engine", "ejs");



// 4) Routing Code
app.post("/create-item", (req, res) => {
    console.log(req.body);
    res.json({test: "success"})
});

app.get('/author', (req, res) => {
    res.render("author", {user: user} );
});

app.get("/", function(req, res) {
    res.render("harid")
});



const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`The server is running successfully on port: ${PORT}`)
});


console.log("Jack Ma maslahatlari!")
const list = [
    "Yaxshi talaba boling", // 0-20
    "Choose a good leader and make lots of mistakes", // 20-30
    "Work on yourself", // 30-40
    "Do what you are good at", // 40-50
    "Invest in youth", // 50-60
    "Rest now, it is late", // 60
];

function giveAvice(age, callback) {
     if(typeof age !== "number") callback("Enter a number", null)
     else if (age <=20) callback(null, list[0]);
    else if (age >  20 && age <= 30) callback(null, list[1]);
    else if (age > 30 && age <= 40) callback(null, list[2]);
    else if (age > 40 &&  age <= 50) callback(null, list[3]);
    else if (age > 50 && age <= 60) callback(null, list[4]);
    else {
        callback(null, list[5])
    };
};

giveAvice(70, (err, data) => {
    if(err) console.log("ERROR", err);
    console.log("Javob:", data);
});