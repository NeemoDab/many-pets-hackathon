// import { query } from "../db/index.js";
// import { pool } from "../db/index.js";

export async function checkValidBreed(searchQuery) {
	//Need to add in logic for validation for dog breed
	return true;
}

export async function checkValidAddress(searchQuery) {
	//Need to add in logic for validation for UK address
	return true;
}

export async function checkBreedDiscount(dog) {
	const dogBreedsWithDiscount = ["poodle", "labrador", "labradoodle"];

	if (dogBreedsWithDiscount.includes(dog.toLowerCase())) {
		return true;
	}
	return false;
}

export async function checkAddressUpcount(address) {
	//Temporary address logic (awaiting address validation logic)
	const addressWithUpcount = ["birmingham", "london", "leeds"];

	for (let i = 0; i < addressWithUpcount.length; i++) {
		if (address.toLowerCase().includes(addressWithUpcount[i])) {
			return true;
		}
	}

	// if (addressWithUpcount.includes(address.toLowerCase())) {
	// 	return true;
	// }
	return false;
}
// - Base pet price at birth = £120
//         - 1 year old pet = 105% of this price (£126)
//         - 2 year old pet = 110% (£132)
//         - 3 = 115%
//         - 4 = 120%
//         - 5 = 125%
//         - 6 = 135%
//         - 7 = 145%
//         - 8 = 155%
//         - 9 = 165%
//         - 10+ = 175%
export function calculateAgeMultiplier(age) {
	//Ensure the age of the pet is an integer
	const petAge = Math.floor(age);
	console.log("petAge", petAge);

	let multiplier = 0;
	if (petAge >= 0 && petAge <= 5) {
		console.log("pet age between 0 and 5");
		multiplier = petAge * 0.05;
	} else if (petAge > 5 && petAge <= 10) {
		console.log("pet age between 6 and 10");
		multiplier = 0.25 + (petAge - 5) * 0.1;
	} else {
		console.log("pet age greater than 10");
		multiplier = 0.75;
	}

	return multiplier;
}

// export async function getReviews(searchQuery) {
// 	console.log(`IT'S HERE! (from models) ${searchQuery} !`);
// 	// SQL: select everything from the snippets table where there title contains value1 [expressed here]. || represents a space.
// 	const result = await pool.query(
// 		`SELECT * FROM reviews WHERE LOWER(title) LIKE LOWER('%' || $1 || '%');`,
// 		[searchQuery]
// 	);
// 	console.log(result.rows);
// 	return result.rows;
// }
// // Creates a new snippet entry on the database after sumbmission on the Front-End
// export async function createNewReview(newReview) {
// 	const result = await pool.query(
// 		`INSERT INTO reviews (title, models, socket, review, stars) VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
// 		[
// 			newReview.title,
// 			newReview.models,
// 			newReview.socket,
// 			newReview.review,
// 			newReview.stars,
//     ]
// 	);

// 	return result.rows;
// }
// // Functionality to delete snippet // Only viable via Postman using DELETE at this time
// export async function deleteReview(id) {
// 	const result = await pool.query(
// 		'DELETE FROM reviews WHERE id = ($1) RETURNING *;',
// 		[id]
// 	);
// 	return result;
// }
// // Retrieves all information within the database table.
// export async function getAllReviews() {
// 	const result = await pool.query('SELECT * FROM reviews');
// 	return result.rows;
// }

// export async function getReviews() {
//   let sqlString = `SELECT * FROM reviews;`;
//   const res = await query(sqlString);
//   console.log(res);
//   return res.rows
// }

// export function searchReviewsByTitle(searchTerm) {
//   return reviews.filter(function (reviews) {
//     return reviews.title.toLowerCase().includes(searchTerm.toLowerCase());
//   });
// }

// export function searchReviewsByAuthor(searchTerm) {
//   const authorNamesMatchingSearchTerm = authors.filter(function (author) {
//     const authorName = `${author.first_name} ${author.last_name}`;
//     return authorName.toLowerCase().includes(searchTerm.toLowerCase());
//   });

//   const authorIdsMatchingSearchTerm = authorNamesMatchingSearchTerm.map(
//     function (author) {
//       return author.id;
//     }
//   );

//   return reviews.filter(function (reviews) {
//     return authorIdsMatchingSearchTerm.includes(reviews.author_id);
//   });
// }

// export function getReviewsById(id) {
//   const found = reviews.find(function (reviews) {
//     return reviews.id === id;
//   });
//   return found;
// }

// export function createReviews(reviews) {
//   reviews.push(reviews);
//   return reviews[reviews.length - 1];
// }

// export function updateReviewsById(id, updates) {
//   const foundIndex = reviews.findIndex(function (reviews) {
//     return reviews.id === id;
//   });
//   reviews[foundIndex] = updates;
//   return reviews[foundIndex];
// }

// export function deleteReviewsById(id) {
//   const foundIndex = reviews.findIndex(function (reviews) {
//     return reviews.id === id;
//   });
//   const item = reviews[foundIndex];
//   books.splice(foundIndex, 1);
//   return item;
// }
