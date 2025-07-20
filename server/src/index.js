import dotenv from "dotenv"
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({
	path: "./.env"
})

const PORT = process.env.PORT || 8000

connectDB()
	.then(() => {
		app.listen(PORT, () => {
			console.log(`🚅 Server is running at http://localhost:${PORT}`);
		})
	})
	.catch(err => {
		console.log("MongoDB connection failed!!", err);
	})



