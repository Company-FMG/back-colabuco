import express from 'express';
const router = express.Router();
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

router.use(express.json());

router.get('/', async (req, res) => {
    try {
        const carrinhosDeCompras = await prisma.carrinhoDeCompras.findMany();
        res.json(carrinhosDeCompras);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' })
    }
})

router.post('/', async (req, res) => {
    const { idCarrinhoDeCompras, valor, idCliente } = req.body
    try {    
        const carrinhoDeCompras = await prisma.carrinhoDeCompras.create({
            data: {
                idCarrinhoDeCompras,
                valor,
                idCliente
            },
        })
        res.json(carrinhoDeCompras);
    } catch (error) {
        res.json({ error: 'An error occurred: ' + error })
    }
})

router.put('/:idCarrinhoDeCompras', async (req, res) => {
    const { idCarrinhoDeCompras } = req.params;
    const { valor, idCliente } = req.body;
    try {
        const carrinhoDeCompras = await prisma.carrinhoDeCompras.update({
            where: { idCarrinhoDeCompras:idCarrinhoDeCompras },
            data: { 
                valor, 
                idCliente
            }
        })
        res.json(carrinhoDeCompras)
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' })
    }
})

router.delete('/:idCarrinhoDeCompras', async (req, res) => {
    const { idCarrinhoDeCompras } = req.params
    try {
        const carrinhoDeCompras = await prisma.carrinhoDeCompras.delete({
            where: { 
                idCarrinhoDeCompras, 
            },
        })
        res.json(carrinhoDeCompras)
    } catch (error) {
        res.json({ error: 'An error occurred' })
    }
})

export default router;