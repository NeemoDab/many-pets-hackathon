import { query } from '../index.js';

import reviews from "../data.js"
//Populate table function executed via script
async function populateTable() {
	for (let i = 0; i < reviews.length; i++) {
		const result = await query(
			`INSERT INTO reviews(count) VALUES ($1) RETURNING *;`,
			[
				reviews[i].count,
			]
		);
		console.log(result.rows[0].title, 'inserted');
	}
}

populateTable();
