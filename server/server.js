import express from "express";
import mysql from 'mysql';
import cors from 'cors';

const app = express();
app.use(cors());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'root123',
    database: 'portolapp'

});

app.get("/", (req,res)=>{
    const sql = "SELECT * from tags";
    db.query(sql, (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
})

app.listen(8081, ()=> {
    console.log("Listening");
})



