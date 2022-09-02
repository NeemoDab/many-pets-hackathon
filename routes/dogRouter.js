import express from "express";
const router = express.Router();

//prettier-ignore
import {
	checkValidBreed, checkValidAddress, checkBreedDiscount, } from "../models/dogModels.js";


router.get("/", async function (req, res) {
  // /dogquote?q=price&breed=dog&age=8&address=38%20Croft%20Rd%SW19%202NF&multi=1
//   const request = require("request");
//   let name = "golden retriever";
//   request.get(
//     {
//       url: "https://api.api-ninjas.com/v1/dogs?name=" + name,
//       headers: {
//         "X-Api-Key": process.env.DOGAPIKEY,
//       },
//     },
//     function (error, response, body) {
//       if (error) return console.error("Request failed:", error);
//       else if (response.statusCode != 200)
//         return console.error(
//           "Error:",
//           response.statusCode,
//           body.toString("utf8")
//         );
//       else console.log(body);
//     }
//   );
//   let address = "";
//   request.get(
//     {
//       url: 'api.ideal-postcodes.co.uk/v1/autocomplete/addresses?=iddqd&q=parkside',
//       headers: {
//         "X-Api-Key": process.env.ADDRESSAPIKEY,
//       },
//     },
//     function (error, response, body) {
//       if (error) return console.error("Request failed:", error);
//       else if (response.statusCode != 200)
//         return console.error(
//           "Error:",
//           response.statusCode,
//           body.toString("utf8")
//         );
//       else console.log(body);
//     }
//   );
  console.log(req.query.q);
  console.log(req.query.breed);
  console.log(req.query.age);
  console.log(req.query.address);
  console.log(req.query.multi);
  if (
    req.query.q !== undefined &&
    req.query.breed !== undefined &&
    req.query.age !== undefined &&
    req.query.address !== undefined &&
    req.query.multi !== undefined
  ) {
    //Checking the dog breed is valid
    const isBreedValid = await checkValidBreed(req.query.breed);
    console.log(isBreedValid);

    if (!isBreedValid) {
      return res.json({
        success: false,
        message: `This is not a valid dog breed`,
      });
    }

    //Checking the UK address is valid
    const isAddressValid = await checkValidAddress(req.query.address);
    console.log(isAddressValid);

    if (!isAddressValid) {
      return res.json({
        success: false,
        message: `This is not a valid UK address`,
      });
    }

    let breedDiscount = 0;
    const isBreedDiscounted = await checkBreedDiscount(req.query.breed);
    isBreedDiscounted ? (breedDiscount = -0.1) : (breedDiscount = 0);

    const insuranceQuotePrice = basePrice + basePrice * breedDiscount;

    const payload = {
      success: true,
      message: `Quote for dog breed: ${req.query.breed}`,
      data: "your price here!",
    };
    return res.json(payload);
  }

  return res.json({
    success: false,
    message: "One or more required parameters are missing",
  });
});

// router.get("/", async function (req, res) {
//   console.log(`Test received`)
//   const searchQuery = req.query.title;
//   console.log(`searched query log: ${searchQuery}`);
//   // define the object it'll return
//   const responseObject = {
//     success: true,
//     data: await getReviews(searchQuery),
//   };
//   // confirm in the console what the client requested
//   console.log(`router get request worked`);
//   // return the response object (defined above) as JSON
//   res.json(responseObject);
// });

// router.post("/", async function (req, res) {
//   const newReview = req.body;
//   console.log(`${newReview.title} new review`)
//   const result = createNewReview(newReview);
//   res.json({ success: true, data: await result });
// });

// router.delete("/:id", async function (req, res) {
//   const id = Number(req.params.id);
//   const result = deleteReview(id);
//   res.json({ success: true, data: await result });
// });

// export default router;

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

export default router;
