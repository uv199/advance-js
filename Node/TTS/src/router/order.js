import express from "express";
import { Order } from "../model/order";
import { auth } from "../auth/auth";
let router = express.Router();

router.get("/getAll", (req, res) => {
  Order.aggregate([
    {
      $lookup: {
        from: "products",
        localField: "productId",
        foreignField: "_id",
        as: "productId",
      },
    },
  ])

    // .populate([
    //   { path: "productId", select: "title price" },
    //   { path: "userId" },
    // ])
    .then((resData) => {
      res.status(200).send(resData);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.post("/create", auth, (req, res) => {
  console.log("----", req.loginUser);
  // let input = { userId: req?.loginUser?._id, ...req?.body };

  req.body.userId = req?.loginUser?._id;
  Order.create(req.body)
    .then((resData) => {
      res.status(200).send(resData);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

export default router;

/*
name
email
DOB
password
classRoom
contactNo
address
rollNo
classTeacher
subject
salary
isClassTEacher
userType: teacher/student




*/
