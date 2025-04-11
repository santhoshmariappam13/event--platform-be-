require('dotenv').config(); 

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.js'); 
const userRoutes = require('./routes/userRoutes.js');
const eventRoutes = require('./routes/eventRoutes.js');
const paymentRoutes = require('./routes/paymentRoutes.js');
const registrationRoutes = require('./routes/registrationRoutes.js');
const ticketRoutes = require('./routes/ticketRoutes.js');
const adminRoutes = require('./routes/adminRoutes.js');

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.use('/api/users', userRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/registrations', registrationRoutes);
app.use('/api/tickets', ticketRoutes);
app.use('/api/admin', adminRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
