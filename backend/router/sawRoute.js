const express = require("express");
const router = express.Router();
const auth = require("../configuration/auth");
const db = require("../configuration/connect");

const configSaw = require("../method/config");
const preferenceConvert = require("../method/preference");
const normalize = require("../method/normalisasi");
const saw = require("../method/saw/sawMethod");

router.get("/", (req, res) => {
    let sql = "SELECT harga, garansi FROM catalogue";
    db.query(sql, (err, result) => {
        if (err) throw err;
        let alter = result.map((data) => {
            return Object.keys(data).map((key) => {
                return data[key];
            });
        });

        const matrixDecision = preferenceConvert(alter, configSaw.preference);
        const normalisasiMatixDecision = normalize(matrixDecision, {
            min: 1,
            max: 8
        });

        const resultSaw = saw(
            normalisasiMatixDecision,
            configSaw.bobot
        );

        const response = {
            matrixDecision,
            normalisasiMatixDecision,
            ...resultSaw
        };

        //console.log(response);
        return res.json(response);
    });
});

module.exports = router;