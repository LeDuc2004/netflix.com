const express = require("express");
const router = express.Router();

const {
    getUsercc,
    addUsercc,
    dnUsercc,
    upload,
    getMoviecc
    } = require("../controllers/Account.controller")

router.get("/upload", getMoviecc)
router.get("/", getUsercc)
router.post("/", addUsercc)
router.post("/dn"  , dnUsercc)
router.post("/upload" , upload)




module.exports = router