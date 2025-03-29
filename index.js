const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const {db, initializeDB } = require('./db/mockDB');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

initializeDB();

app.use(bodyParser.json());
app.use(cors());

// Import routes
const queryRoute = require('./routes/query');
const explainRoute = require('./routes/explain');
const validateRoute = require('./routes/validate');

app.use('/query', queryRoute);
app.use('/explain', explainRoute);
app.use('/validate', validateRoute);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
