const db = require("./configuration/connect");

module.exports = {
    select: (req, res) => {
        let sql = "SELECT * FROM subcritcategory";
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.json({ result });
        });
    },
    insert: (req, res) => {
        let sql = "INSERT INTO subcritcategory SET ?";
        db.query(sql, req.body, (err, result) => {
            if (err) throw err;
            res.json({ result });
        });
    },
    update: (req, res) => {
        let sql = `UPDATE subcritcategory WHERE id_sub = ${req.params.id}`;
        db.query(sql, req.body, (err, result) => {
            if (err) throw err;
            res.json({ result });
        });
    },
    destroy: (req, res) => {
        let sql = `DELETE FROM subcritcategory WHERE id_sub = ${req.params.id}`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.json({ result });
        });
    }
};