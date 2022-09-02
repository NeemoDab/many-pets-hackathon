//COMPLETE
import express from "express";
const router = express.Router();

ReadableStreamDefaultController.get("/", function (req, res, next) {
  res.render("index", { count: "count" });
});

export default router;
//
///
//