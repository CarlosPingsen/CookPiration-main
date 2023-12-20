// const express = require('express');
import express, { response } from 'express';
import mysql from 'mysql';
import cors from 'cors';
// const mysql = require('mysql');
// const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'cookpiration'
})

app.get('/', (re, res) => {
    return res.json("ini server");
})

app.post('/register', (req, res) => {
    const sql = "INSERT INTO users (`UserID`,`NamaDepan`, `JenisKelamin`, `Email`, `NamaBelakang`, `MakananFav`, `Password`) VALUES(?)";
    const values = [
        req.body.UserID,
        req.body.NamaDepan,
        req.body.JenisKelamin,
        req.body.Email,
        req.body.NamaBelakang,
        req.body.MakananFav,
        req.body.Password
    ]
    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM users WHERE Email = ? AND Password = ?";
    db.query(sql, [req.body.Email, req.body.password], (err, data) => {
        if (err) return res.json("gagal");
        if (data.length > 0) {
            return res.json("login berhasil")
        } else {
            return res.json("ga ada")
        }
    })
})



app.listen(5173, () => {
    console.log("apa aja");
})