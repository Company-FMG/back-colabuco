import express from 'express';
const router = express.Router();
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

router.use(express.json());

router.get('/', async (req, res) => {
    try {
        const clientes = await prisma.cliente.findMany();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' })
    }
})

router.post('/', async (req, res) => {
    const { idCliente, nome, email, cpf, telefone, senha, endereco } = req.body
    try {    
        const cliente = await prisma.cliente.create({
            data: {
                idCliente,
                nome,
                email,
                cpf, 
                telefone,
                senha,
                endereco
            },
        })
        res.json(cliente);
    } catch (error) {
        res.json({ error: 'An error occurred' })
    }
})

router.put('/:idCliente', async (req, res) => {
    const { idCliente } = req.params;
    const { nome, email, cpf, telefone, senha, endereco } = req.body;
    try {
        const cliente = await prisma.cliente.update({
            where: { idCliente:idCliente },
            data: { 
                nome, 
                email, 
                cpf, 
                telefone,
                senha,
                endereco
            }
        })
        res.json(cliente)
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' })
    }
})

router.delete('/:idCliente', async (req, res) => {
    const { idCliente } = req.params
    try {
        const cliente = await prisma.cliente.delete({
            where: { 
                idCliente, 
            },
        })
        res.json(cliente)
    } catch (error) {
        res.json({ error: 'An error occurred' })
    }
})

export default router;