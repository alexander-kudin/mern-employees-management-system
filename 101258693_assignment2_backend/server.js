import express from 'express';
import mongoose from 'mongoose';
import eployeesRoutes from './routes/employees.js'
import cors from 'cors';
// Express application
const app = express();

// Midleware router
app.use(express.urlencoded({extended: true})); 
app.use(express.json());  
app.use(cors());
app.use('/employees', eployeesRoutes);


app.get('/', (req, res) => {
    res.send("<h1>Assignment 2 - Alexander Kudin 101258693</h1>");
});

const CONNECTION_URL = "mongodb+srv://admin:2MQEFRC9loNaGr20@comp3123.a1cw7.mongodb.net/db_f2021_comp3123?retryWrites=true&w=majority";

// Server PORT
const PORT = process.env.PORT || 5001;

mongoose.connect(
    CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true}
    ).then(
        () => app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
    )
    .catch(
        (error) => console.log(`Connection Error – ${error.message}`
    )
);
