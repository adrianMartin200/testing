'use strict';

const { v4: uuidV4 } = require('uuid');
const { hashPassword, comparePassword } = require('../crypto');

const userDataBase = {
  '001': {},
};

const registerUser = (userName, password) => {
  userDataBase[uuidV4()] = {
    userName,
    password: hashPassword(password),
  };
  // Save in DB own user
};

const checkUserCredentials = (userID, password) => {
  // Verify that credentials are correct
  let user = userDataBase[userID];
  return comparePassword(password, user.password);

  // return false;
};

module.exports = {
  registerUser,
  checkUserCredentials,
};
