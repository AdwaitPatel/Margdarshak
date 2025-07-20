import express from "express"

const app = express()

const PORT = 8000

app.get("/", async (req, res) => {
	res.send("Hello world")
})




app.listen(PORT, () => {
	console.log(`Server is listening at http://localhost:${PORT}`);
})