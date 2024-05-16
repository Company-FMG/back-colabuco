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

router.post('/', async (req, res) => {
    const { idArtista, cnpj, categoriaArte, politicaEntregaFrete, descricao } = req.body
    try {    
        const artistas = await prisma.artista.create({
            data: {
                idArtista,
                cnpj,
                categoriaArte,
                politicaEntregaFrete, 
                descricao,
            },
        })
        res.json(artistas);
    } catch (error) {
        res.json({ error: 'An error occurred' })
    }
})

router.put('/:idArtista', async (req, res) => {
    const { idArtista } = req.params;
    const { cnpj, categoriaArte, politicaEntregaFrete, descricao } = req.body;
    try {
        const artistas = await prisma.artista.update({
            where: { idArtista:idArtista },
            data: { 
                cnpj, 
                categoriaArte, 
                politicaEntregaFrete, 
                descricao,
            }
        })
        res.json(artistas)
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' })
    }
})

router.delete('/', async (req, res) => {
    const { idArtista } = req.body
    try {
        const artista = await prisma.artista.delete({
            where: { 
                idArtista, 
            },
        })
        res.json(artista)
    } catch (error) {
        res.json({ error: 'An error occurred' })
    }
})

export default router;