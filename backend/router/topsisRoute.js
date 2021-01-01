const express = require("express");
const router = express.Router();
const auth = require("../configuration/auth");
const db = require("../configuration/connect");

const configTopsis = require("../method/config");
const convertPreference = require("../method/preference");
const normalize = require("../method/normalisasi");
const topsis = require("../method/topsis/topsisMethod");

router.get("/", (req, res) => {
    let sql = "SELECT harga, garansi FROM catalogue";
    db.query(sql, (err, result) => {
        if (err) throw err;
        let alter = result.map((data) => {
            return Object.keys(data).map((key) => {
                return data[key];
            });
        });

        const matrixDecision = convertPreference(alter, configTopsis.preference);
        const normalisasiMatixDecision = normalize(matrixDecision, {
            min: 1,
            max: 8
        });

        const resultTopsis = topsis(
            normalisasiMatixDecision,
            configTopsis.bobot,
            configTopsis.isBenefit
        );

        const response = {
            matrixDecision,
            normalisasiMatixDecision,
            ...resultTopsis
        };

        console.log(resultTopsis);
        return res.json(response);
    });
});

module.exports = router;