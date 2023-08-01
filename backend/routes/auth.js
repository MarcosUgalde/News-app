const router = require("express").Router();
const { authorizer, fieldsValidator } = require("../middlewares");

const signupValidator = fieldsValidator("email", "username", "password");
const signinValidator = fieldsValidator("email", "password");
