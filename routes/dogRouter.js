import express from "express";
const router = express.Router();

//prettier-ignore
import {
	checkValidBreed, checkValidAddress, checkBreedDiscount, checkAddressUpcount, calculateAgeMultiplier} from "../models/dogModels.js";

router.get("/", async function (req, res) {
	// /localhost:3001/dogquote?q=price&breed=dog&age=8&address=london&multi=1
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

		//Dog breed discount
		let basePrice = 120;
		let breedDiscount = 0;
		const isBreedDiscounted = await checkBreedDiscount(req.query.breed);
		isBreedDiscounted ? (breedDiscount = -0.1) : (breedDiscount = 0);

		//Address upcount
		let addressUpcount = 0;
		const isAddressUpcounted = await checkAddressUpcount(req.query.address);
		isAddressUpcounted ? (addressUpcount = 0.15) : (addressUpcount = 0);

		// - Base pet price at birth = £120
		//     - 1 year old pet = 105% of this price (£126)
		//     - 2 year old pet = 110% (£132)
		//     - 3 = 115%
		//     - 4 = 120%
		//     - 5 = 125%
		//     - 6 = 135%
		//     - 7 = 145%
		//     - 8 = 155%
		//     - 9 = 165%
		//     - 10+ = 175%

		//Pet age price multiplier
		const ageMultiplier = calculateAgeMultiplier(req.query.age);
		console.log("ageMultiplier", ageMultiplier);

		//Quote calculation
		const insuranceQuotePrice =
			basePrice +
			basePrice * breedDiscount +
			basePrice * addressUpcount +
			basePrice * ageMultiplier;

		const payload = {
			success: true,
			message: `Quote for dog breed: ${req.query.breed} in ${req.query.address} of age ${req.query.age}`,
			data: { insuranceQuotePrice },
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
