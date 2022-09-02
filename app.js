import express from "express";
import cors from "cors";
import router from "./routes/Countrouter.js";
const app = express();
const PORT = process.env.PORT || 3001;
//uhfdhfifefj

app.use(express.json());
app.use(cors())

app.get("/", function (req, res) {
  res.json({
    success: true,
    message: "sucess",
  });
});

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});

// app.use(logger("dev"));
// app.use(express.urlencoded({ extended: false }));
// // app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

/* DO NOT CHANGE THIS ROUTE - it serves our front-end */
// app.get('/', function (req, res) {
//   res.sendFile(html);
// });

// app.use("/routes", indexRouter);
app.use("/feedback", router);
// app.use("/routes/booksrouter.js", booksRouter);