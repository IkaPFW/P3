const db = require("./configuration/connect");

module.exports = {
    select: (req, res) => {
        let sql = "SELECT * FROM subcritgaransi";
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.json({ result });
        });
    },
    insert: (req, res) => {
        let sql = "INSERT INTO subcritgaransi SET ?";
        db.query(sql, req.body, (err, result) => {
            if (err) throw err;
            res.json({ result });
        });
    },
    update: (req, res) => {
        let sql = `UPDATE subcritgaransi WHERE id_sub = ${req.params.id}`;
        db.query(sql, req.body, (err, result) => {
            if (err) throw err;
            res.json({ result });
        });
    },
    destroy: (req, res) => {
        let sql = `DELETE FROM subcritgaransi WHERE id_sub = ${req.params.id}`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.json({ result });
        });
    }
};