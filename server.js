const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://bolakay717:shukhrat717@cluster0.o2z2byv.mongodb.net/reja"


mongodb.connect(
    connectionString, 
    {useNewUrlParser:true, 
        useUnifiedTopology: true
    },(err, client) => {
        if(err) console.log("ERROR on connction MongoDB");
        else {
            console.log("MongoDB conection succeed");
            module.exports = client;
            const app = require("./app");
            const server = http.createServer(app);
            let PORT = 3000;
            server.listen(PORT, function() {
                console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
            );
        });
    }
 }
 );

