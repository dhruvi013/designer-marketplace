const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const session = require('express-session');
const authRoutes = require('./routes/authRoutes');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(cookieParser());
app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: false }));

app.use('/api/auth', authRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
 