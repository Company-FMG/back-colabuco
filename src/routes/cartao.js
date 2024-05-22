import express from 'express';
const router = express.Router();
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

router.use(express.json());

router.get('/', async (req, res) => {
    try {
        const cartoes = await prisma.cartao.findMany();
        res.json(cartoes);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

router.post('/', async (req, res) => {
    const { numero, validade, cvv, nomeTitular, clienteId } = req.body;
    try {
        const cartao = await prisma.cartao.create({
            data: {
                numero,
                validade,
                cvv,
                nomeTitular,
                clienteId
            },
        });
        res.json(cartao);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

router.put('/:idCartao', async (req, res) => {
    const { idCartao } = req.params;
    const { numero, validade, cvv, nomeTitular, clienteId } = req.body;
    try {
        const cartao = await prisma.cartao.update({
            where: { idCartao: idCartao },
            data: { 
                numero, 
                validade, 
                cvv, 
                nomeTitular, 
                clienteId 
            }
        });
        res.json(cartao);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

router.delete('/:idCartao', async (req, res) => {
    const { idCartao } = req.params;
    try {
        const cartao = await prisma.cartao.delete({
            where: { 
                idCartao: idCartao, 
            },
        });
        res.json(cartao);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

export default router;
