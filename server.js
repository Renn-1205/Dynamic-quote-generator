const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
const PORT = 3000;

// Route to get random quote
app.get("/quote", (req, res) => {
    fs.readFile("quotes.json", "utf8", (err, data) => {
        if (err) return res.status(500).send({ error: "Error reading database" });
        res.json(JSON.parse(data)[Math.floor(Math.random() * JSON.parse(data).length)]);
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/quote`);
});
