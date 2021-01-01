const { rejects } = require("assert");
const jwt = require("jsonwebtoken");
const { func } = require("prop-types");

function verifyToken(token, res){
    return new Promise(async (resolve, reject) => {
        try{
            const payload = await jwt.verify(token, `ND1151b`);
            resolve(payload.data);
        } catch {
            res.sendStatus(404);
        }
    });
}

async function authorizeUser(req, res, next){
    const bearerHeader = req.headers["authorization"];
    if(typeof bearerHeader !== "undefined"){
        const token = bearerHeader.split(" ")[1];
        req.user = await verifyToken(token, res);
        next();
    } else {
        res.sendStatus(404);
    }
}

module.exports = authorizeUser;