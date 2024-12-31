const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
// const authRoutes = require('./routes/authRoutes');
// const storeRoutes = require('./routes/storeRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// app.use('/api/auth', authRoutes);
// app.use('/api/stores', storeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
