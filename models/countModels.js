
// import { query } from "../db/index.js";

import { pool } from '../db/index.js';

export async function getCount(searchQuery) {
	console.log(`IT'S HERE! (from models) ${searchQuery} !`);
	// SQL: select everything from the snippets table where there title contains value1 [expressed here]. || represents a space.
	const result = await pool.query(
		`SELECT * FROM count WHERE LOWER(count) LIKE LOWER('%' || $1 || '%');`,
		[searchQuery]
	);
	console.log(result.rows);
	return result.rows;
}
// Creates a new snippet entry on the database after sumbmission on the Front-End
export async function createNewCount(newCount) {
	const result = await pool.query(
		`INSERT INTO count (count) VALUES ($1) RETURNING *;`,
		[
			newCount.count,
    ]
	);

	return result.rows;
}
// Functionality to delete snippet // Only viable via Postman using DELETE at this time
export async function deleteCount(id) {
	const result = await pool.query(
		'DELETE FROM count WHERE id = ($1) RETURNING *;',
		[id]
	);
	return result;
}
// Retrieves all information within the database table.
export async function getAllCount() {
	const result = await pool.query('SELECT * FROM count');
	return result.rows;
}

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


