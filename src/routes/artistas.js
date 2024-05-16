import express from 'express';
const router = express.Router();
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

router.use(express.json());

router.get('/', async (req, res) => {
    try {
        const artistas = await prisma.artista.findMany();
        res.json(artistas);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' })
    }
})