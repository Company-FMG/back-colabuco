import express from 'express';
const router = express.Router();

import pedidosRouter from './pedidos.js'

router.use(express.json());

router.get('/', (req, res) => {
    res.send("Back-end do colabuco")
})

router.use('/pedidos', pedidosRouter);

export default router;