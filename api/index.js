const express = require('express');
const routes = require('./routes/index');
const port = 3030;
const cors = require('cors')

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes)

app.listen(port, () => console.log("Running!"))

