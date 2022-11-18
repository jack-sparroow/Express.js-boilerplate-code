const databaseModels = require("./../models");

const listUserService = async () => {
  try {
    const userListFromDatabase = await databaseModels.userModel.find({});
    return { statusCode: 200, responseBody: userListFromDatabase };
  } catch (error) {
    return {
      statusCode: 500,
      responseBody: { message: "Internal server error" },
    };
  }
};

const addUserService = async (username, email, password) => {
  try {
    const userAddResponseFromDB = await databaseModels.userModel.create({
      username,
      email,
      password,
    });
    return { statusCode: 200, responseBody: { data: userAddResponseFromDB } };
  } catch (error) {
    console.log("error ", error)
    return {
      statusCode: 500,
      responseBody: { message: "Internal server error" },
    };
  }
};

module.exports = {
  listUserService,
  addUserService,
};
