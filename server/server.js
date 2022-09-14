const express = require("express")
const cors = require("cors")
const path = require("path")

const app = express();

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../index.html"))
});

app.get('/reset.css', (req, res) => {
    res.sendFile(path.join(__dirname, "../reset.css"))
});

app.get('/styles.css', (req, res) => {
    res.sendFile(path.join(__dirname, "../styles.css"))
});

const port = process.env.PORT || 4005;

app.listen(port, () => console.log(`Server big chillen on ${port}`))
