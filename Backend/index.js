import express from "express";
const app = express();
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./Route/book.route.js";
import cors from "cors"
import userRoute from "./Route/user.route.js"

app.use(cors())



app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 3000;
const URI = process.env.MongoURI;

try {
  mongoose.connect(URI);
  console.log("mongodb connected");
} catch (error) {
  console.log(error);
  
}

app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
