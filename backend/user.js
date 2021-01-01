const db = require("./configuration/connect");
const jwt = require("jsonwebtoken");

module.exports = {
    insert: (req, res) => {
        let sql = "INSERT INTO users SET ?";
        db.query(sql, req.body, (err, result) => {
            if (err) throw err;
            res.json({ result });
        });
    },
    auth: (req, res) => {
        let sql = `SELECT * FROM users WHERE username = '${req.body.username}' AND password = '${req.body.password}'`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            let token = jwt.sign({ data: result }, `ND1151b`, { expiresIn: '1d' });
            res.json({ token, login: 'Success' });
        });
    }
};