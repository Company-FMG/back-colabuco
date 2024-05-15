import express from 'express';
const router = express.Router();
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

router.use(express.json());

router.get('/', async (req, res) => {
    try {
        const pedidos = await prisma.pedido.findMany();
        res.json(pedidos);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' })
    }
})

router.post('/', async (req, res) => {
    const { idPedido, opcoesEntrega, valor } = req.body;
    try {
        const pedidos = await prisma.pedido.create({
            data: {
                idPedido,
                opcoesEntrega,
                valor
            }
        });
        res.json(pedidos);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' })
    }
})

router.put('/', async (req, res) => { 
    const { idPedido } = req.body;
    const { opcoesEntrega, valor } = req.body;
    try {
        const pedidos = await prisma.pedido.update({
            where: { idPedido:idPedido },
            data: { opcoesEntrega, valor },
        })
        res.json(pedidos)
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' })
    }
})

router.delete('/', async (req, res) => {
    const { idPedido } = req.body;
    const pedidos = await prisma.pedido.delete({
        where: {
            idPedido,
        }
    })
    res.json(pedidos)
})

export default router;
