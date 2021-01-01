const express = require("express");
const router = express.Router();

const { createUser, createCatalogue, createCriteria, createSubCritCategory,
    createSubCritBrand, createSubCritGaransi, createSubCritPrice } = require("../database");

router.get("/user", createUser);
router.get("/katalog", createCatalogue);
router.get("/kriteria", createCriteria);
router.get("/sub_kriteria_kategori", createSubCritCategory);
router.get("/sub_kriteria_merk", createSubCritBrand);
router.get("/sub_kriteria_harga", createSubCritPrice);
router.get("/sub_kriteria_garansi", createSubCritGaransi);

module.exports = router;