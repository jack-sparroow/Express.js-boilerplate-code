const express = require("express")

const router = express.Router()

const userController = require("./../controllers")

router.route("/users").get(userController.listUsersController)

router.route("/user").post(userController.addUserController)

module.exports = router