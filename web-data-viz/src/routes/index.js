var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
    res.render("index");
});

module.exports = router;

// const path = require("path"); // Certifique-se de ter o path importado no topo

// router.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "../views/index.html")); 
// });