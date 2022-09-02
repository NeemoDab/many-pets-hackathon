import express from "express";
import cors from "cors";
import dogQuoteRouter from "./routes/dogRouter.js";
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.get("/", function (req, res) {
	res.json({
		success: true,
		message: "success",
	});
});

app.listen(PORT, function () {
	console.log(`Server is running on port ${PORT}`);
});

app.use("/dogquote", dogQuoteRouter);
