const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.post("/users", userController.addUser);
router.get("/getallusers",userController.getallusers)




module.exports = router;