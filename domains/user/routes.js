const express = require("express");
const userRouter = express.Router();
const { VerifyTokenMW } = require("../../auth/tokenAuth");
const {
  RegisterUserValidationMW,
  AuthenticateUserValidationMW,
} = require("./validators");
const userController = require("./controllers");

userRouter.get("/users", VerifyTokenMW, userController.getAllUsers);
useRouter.get(
  "/getUserById/:userId",
  VerifyTokenMW,
  userController.getUserById
);
userRouter.post(
  "/register",
  RegisterUserValidationMW,
  userController.registerUser
);
userRouter.post(
  "/signin",
  AuthenticateUserValidationMW,
  userController.authenticateUser
);

module.exports = userRouter;
