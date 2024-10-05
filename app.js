const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const app = express();

app.use(bodyParser.json());

// ROUTES
app.use('/api', userRoutes);

// START SERVER
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
