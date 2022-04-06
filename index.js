import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

import donations from './router/donation.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const URI = process.env.DATABASE_URL;

app.use(bodyParser.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }));
app.use(cors());
app.use(morgan('combined'));

app.use('/api/donations', donations);

mongoose.connect(URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to db");
        app.listen(PORT, () => {
            console.log("Server is running!", PORT)
        });
    }).catch((err) => {
        console.log("error: ", err);
    });

