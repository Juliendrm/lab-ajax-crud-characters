const router = require("express").Router();

// router.get("/", (req, res, next) => {
// const file = `$__dirname.replace("routes", "public")/index.html`;
// res.sendFile(file);
// });

router.use("/characters", require("./characters.route"));

module.exports = router;
