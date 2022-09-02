import { query } from '../index.js';

import count from "../data.js"
//Populate table function executed via script
async function populateTable() {
	for (let i = 0; i < count.length; i++) {
		const result = await query(
			`INSERT INTO count(count) VALUES ($1) RETURNING *;`,
			[
				count[i].count,
			]
		);
		console.log(result.rows[0].count, 'inserted');
	}
}

populateTable();
