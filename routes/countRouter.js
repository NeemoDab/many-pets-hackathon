//DONE FOR NOW MAY NEED TO COME BACK
import express from "express";
const router = express.Router();

import {
  getCount,
  createNewCount,
  deleteCount,
  getAllCount
} from "../models/countModels.js";

router.get("/", async function (req, res) {
  const responseObject = { success: true, data: await getAllCount() };
  console.log("received")
  res.json(responseObject);
});

router.get("/", async function (req, res) {
  console.log(`Test received`)
  const searchQuery = req.query.count;
  console.log(`searched query log: ${searchQuery}`);
  // define the object it'll return
  const responseObject = {
    success: true,
    data: await getCount(searchQuery),
  };
  // confirm in the console what the client requested
  console.log(`router get request worked`);
  // return the response object (defined above) as JSON
  res.json(responseObject);
});

router.post("/", async function (req, res) {
  const newCount = req.body;
  console.log(`${newCount.count} new count`)
  const result = createNewCount(newCount);
  res.json({ success: true, data: await result });
});

router.delete("/:id", async function (req, res) {
  const id = Number(req.params.id);
  const result = deleteCount(id);
  res.json({ success: true, data: await result });
});

export default router;

// NOTE: changed "payload" to "data" because of a frontend / react specific method
























// // GET REQUESTS AND HTTP requests
// // Reviews
// //reviews
// import {
//   getReviews,
//   searchReviewsByTitle,
//   searchReviewsByAuthor,
//   getReviewsById,
//   createReviews,
//   updateReviewsById,
//   deleteReviewsById,
// } from "../models/reviewmodels.js";

// /* books endpoints go here */

// router.get("/", async function (req, res) {
//   if (req.query.search !== undefined) {
//     const result = searchReviewsByTitle(req.query.search);
//     return res.json({ success: true, payload: result });
//   }

//   if (req.query.author !== undefined) {
//     const result = searchReviewsByAuthor(req.query.author);
//     return res.json({ success: true, payload: result });
//   }

//   const result = await getReviews();
//   res.json({ success: true, payload: result });
// });


// router.get("/:id", function (req, res) {
//   const id = Number(req.params.id);
//   const reviews = getReviewsById(id);
//   res.json({ success: true, payload: reviews });
// });

// router.post("/", function (req, res) {
//   const newReviews = req.body;
//   const result = createReviews(newReviews);
//   res.json({ success: true, payload: result });
// });

// router.put("/:id", function (req, res) {
//   const id = Number(req.params.id);
//   const data = req.body;
//   const result = updateReviewsById(id, data);
//   res.json({ success: true, payload: result });
// });

// router.delete("/:id", function (req, res) {
//   const id = Number(req.params.id);
//   const result = deleteReviewsById(id);
//   res.json({ success: true, payload: result });
// });

// export default router;
