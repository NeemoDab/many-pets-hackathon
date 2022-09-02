import { query } from '../index.js';

import reviews from "../data.js"
//Populate table function executed via script
async function populateTable() {
	for (let i = 0; i < reviews.length; i++) {
		const result = await query(
			`INSERT INTO reviews(title, models, socket, review, stars) VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
			[
				reviews[i].title,
				reviews[i].models,
				reviews[i].socket,
				reviews[i].review,
				reviews[i].stars,
			]
		);
		console.log(result.rows[0].title, 'inserted');
	}
}

populateTable();
