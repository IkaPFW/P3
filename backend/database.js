const db = require("./configuration/connect");

module.exports = {
    createDB: (rq, res) => {
        let sql = "CREATE DATABASE spareparts";
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send("Database created");
        });
    },
    createUser: (req, res) => {
        let sql = "CREATE TABLE users(id_user int AUTO_INCREMENT, username VARCHAR(255), password VARCHAR(255), PRIMARY KEY(id_user))"
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send("Table created");
        });
    },
    createCatalogue: (req, res) => {
        let sql = "CREATE TABLE catalogue(id_barang int AUTO_INCREMENT, nama_barang VARCHAR(255), kategori VARCHAR(255), merk VARCHAR(255), harga VARCHAR(255), garansi VARCHAR(255), PRIMARY KEY(id_barang))";
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send("Table created");
        });
    },
    createCriteria: (req, res) => {
        let sql = "CREATE TABLE criteria(id_criteria int AUTO_INCREMENT, kode VARCHAR(10), kriteria VARCHAR(255), atribut VARCHAR(255), bobot int, PRIMARY KEY(id_criteria))";
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send("Table created");
        });
    },
    createSubCritCategory: (req, res) => {
        let sql = "CREATE TABLE subcritcategory(id_sub int AUTO_INCREMENT, kode VARCHAR(255), sub_kriteria VARCHAR(255), nilai int, PRIMARY KEY(id_sub))";
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send("Table created");
        });
    },
    createSubCritBrand: (req, res) => {
        let sql = "CREATE TABLE subcritbrand(id_sub int AUTO_INCREMENT, kode VARCHAR(255), sub_kriteria VARCHAR(255), nilai int, PRIMARY KEY(id_sub))";
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send("Table created");
        });
    },
    createSubCritPrice: (req, res) => {
        let sql = "CREATE TABLE subcritprice(id_sub int AUTO_INCREMENT, kode VARCHAR(255), sub_kriteria VARCHAR(255), nilai int, PRIMARY KEY(id_sub))";
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send("Table created");
        });
    },
    createSubCritGaransi: (req, res) => {
        let sql = "CREATE TABLE subcritgaransi(id_sub int AUTO_INCREMENT, kode VARCHAR(255), sub_kriteria VARCHAR(255), nilai int, PRIMARY KEY(id_sub))";
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send("Table created");
        });
    }
};