import express from "express";
import mysql from 'mysql';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'root123',
    database: 'portol'

});

app.get("/", (req,res)=>{
    const sql = "SELECT * from tags";
    db.query(sql, (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
})

app.post('/create', (req, res) => {
    const { location, url } = req.body;
    const sql = "INSERT INTO tags (`location`, `destination_link`) VALUES (?, ?)";
    
    db.query(sql, [location, url], (err, data) => {
        if (err) {
            console.error("MySQL Error:", err);
            return res.json("error");
        }
        return res.json(data);
    });
});

app.put('/update/:id', (req, res) => {
    const { location, url } = req.body;
    const sql = "UPDATE tags SET `location` = ?, `destination_link` = ? WHERE tag_id = ?";
    const values = [location, url, req.params.id];

    db.query(sql, values, (err, data) => {
        if (err) {
            console.error("MySQL Error:", err);
            return res.json("error");
        }
        return res.json(data);
    });
});


app.delete('/tag/:id', (req, res) => {
    const { location, url } = req.body;
    const sql = "delete from tags where `tag_id` = ?";
    const id = req.params.id;
    db.query(sql, id, (err, data) => {
        if (err) {
            console.error("MySQL Error:", err);
            return res.json("error");
        }
        return res.json(data);
    });
});

app.listen(8081, ()=> {
    console.log("Listening");
})



