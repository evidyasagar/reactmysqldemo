const express = require('express');
const mysql = require('mysql')
const cors = require('cors')
const app = express();
app.use(cors());

const db=mysql.createConnection({
    connectionLimit : 100,
    waitForConnections : true,
    queueLimit :0,
    host: 'localhost',
    user: 'root',
    password:'P@ssw0rd123',
    database: 'amoordersreport',
    debug: true,
    wait_timeout : 28800,
    connect_timeout :10
});

app.get('/', (re, res) =>{
    return res.json("From Backend Side");

})
app.get('/amoorders', (req, res) => {
    const sql = "SELECT * FROM amoorder";
    db.query(sql, (err, data) =>{
        if(err) return res.json("Error...");
        return res.json(data);
    });
})

app.listen(8082, ()=> {
    console.log("Listening......");
})

