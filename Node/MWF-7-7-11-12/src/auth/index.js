import jwt from "jsonwebtoken";
import { model } from "../models";

export const authorized = async (req, res, next) => {
  // console.log(req.headers.authorization)
  try {
    const token = req.headers.authorization.split(" ")[1];
    // const token = req.headers.auth_token

    const data = jwt.verify(token, process.env.SECRET_KEY);
    if (data) {
      next();
      const userData = await model.User.findOne({ email: data?.email });
      req.loginUser = userData;
    } else throw new Error("you are not authorized");
  } catch (error) {
    throw new Error("you are not authorized");
  }
};

export const AdminAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const data = jwt.verify(token, process.env.SECRET_KEY);
    if (data.userType !== "admin") throw new Error("You are--- not authorized");
    if (data) next();
    else throw new Error("you are not ====authorized");
  } catch (error) {
    console.log("error----------->", error.message);
    throw new Error("you are not-=-==-=-=-=-=- authorized");
  }
};
