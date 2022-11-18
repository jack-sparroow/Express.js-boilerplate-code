const { responseHandler } = require("../../utils/responseHandler")

const userService = require("./../services")

const listUsersController = async (request, response) => {
    const { statusCode, responseBody} = await userService.listUserService()
    responseHandler(response, statusCode, responseBody)
}


const addUserController = async (request, response) => {

    const {username, email, password} = request.body

    const { statusCode, responseBody} = await userService.addUserService(username, email, password)
    
    responseHandler(response, statusCode, responseBody)
}

module.exports = {
    listUsersController,
    addUserController
}