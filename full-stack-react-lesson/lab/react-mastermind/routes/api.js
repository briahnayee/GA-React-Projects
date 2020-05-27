var router = require("express").Router()

router.get("/scores", scoresCtrl.index)

module.exports = router