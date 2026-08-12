// const cities = require("./data/data.js");
// console.log(cities);

// const fs = require("fs");                 // fs is file system
// fs.writeFileSync("test.txt", "Hello Haryana");
// fs.writeFileSync("./data/test.txt", "Hello Rohtak");
// const path = require("path");             // path for path determination
// const filename = path.join(__dirname, "data", "test.txt");   // used top use our path name on mac or windows both as there is / and \ difference.
// console.log(filename);
// const os = require("os");
// const userInfo = os.userInfo();
// const freeMemory = os.freemem();
// const totalMemory = os.totalmem();
// const uptime = os.uptime();
// console.log(os);
// console.log("User Info: ", userInfo);
// console.log("Free Memory: ", freeMemory);
// console.log("Total Memory: ", totalMemory);
// console.log("Uptime: ", uptime);

// import chalk from "chalk"
// // const chalk = require("chalk")       // external module. Before it, we used internal modules
// console.log(chalk.red("Radhe Radhe"))
// console.log(chalk.blue("Radhe Radhe"))
// console.log(chalk.black("Radhe Radhe"))

// today modules covered : (fs, path, os)internal modules, chalk(external module)  -- for hw today.

// ---------------------------end of first day------------------------------------------------------------------------

// const crypto = require("crypto");    // crypto for security

// const uuid = crypto.randomUUID();
// console.log(uuid);

// DNS module : domain name server
// why important? : network operations, email infrastructure, domain verification
// const dns = require("dns");
// dns.lookup("google.com",(err, address)=>{
//     console.log(address);
// });

// process object : build in object in node.js
//                   read command line argument
//                   access environment variables
//                   get current working directory
// process.exit(0):   in case of error
// process.exit(1):   everything is good and want exit for us 
// environment variables : variable available in entire node ecosystem


// const prcess = require("process");
// console.log(process.argv);
// const name = process.argv[2];
// console.log(process.env.PORT);

require("dotenv").config();
const prcess = require("process");
console.log(process.env.PORT);

// pwd : print working directory

// ---------------------------------end of day 2------------------------------------------------------------------

// 10/08/2026

const http = require('http');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res)=>{
    res.writeHead(200, {"content-type":"text/html"});
    res.write("<h1>hello haryana</h1>");
    res.end();
})

server.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`);
})