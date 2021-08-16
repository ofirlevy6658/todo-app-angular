const express = require("express");
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");
const { tasks } = require("./data");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/tasks", function (req, res) {
	res.send(tasks);
});

app.post("/tasks", function (req, res) {
	try {
		const { context } = req.body;
		if (!context) return res.send("no context provided");
		tasks.push({
			context,
			id: uuidv4(),
			complete: false,
		});
	} catch (e) {
		res.send(e.message);
	}
	res.send(tasks);
});

app.put("/tasks", function (req, res) {
	try {
		const { id } = req.body;
		if (!id) return res.send({ msg: "id not provided" });
		const itemToDelete = tasks.findIndex((el) => el.id === id);
		if (itemToDelete === -1) return res.send({ msg: "task not found" });
		tasks.splice(itemToDelete, 1);
		res.send(tasks);
	} catch (e) {
		res.send(e.message);
	}
});

const port = 3000;
app.listen(port, () => {
	console.log(`app listening at http://localhost:${port}`);
});
