import'dotenv/config';
import cors from 'cors';
import express from 'express';
import router from './src/routes/routes.js'
import { PrismaClient } from '@prisma/client';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router)

app.get('/', (req, res) => {
    return res.send('Received a GET HTTP method');
});

app.post('/', (req, res) => {
    return res.send('Received a POST HTTP method');
});

app.put('/', (req, res) => {
    return res.send('Received a PUT HTTP method');
});

app.delete('/', (req, res) => {
    return res.send('Received a DELETE HTTP method');
});

app.listen(3000, () => {
    console.log ("App ExpressJS está online!")
})