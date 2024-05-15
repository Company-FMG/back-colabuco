import express from 'express';
const router = express.Router();

router.use(express.json());

router.get('/', async(req, res) => {
    const pedidos = await pedidos.findAll();
    res.json(pedidos);
})

export default router;
