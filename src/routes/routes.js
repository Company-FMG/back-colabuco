import express from "express";
const router = express.Router();

import pedidosRouter from "./pedidos.js";
import produtosRouter from "./produto.js";
import artistasRouter from "./artistas.js";
import clientesRouter from "./clientes.js";
import carrinhoDeComprasRouter from "./carrinhosDeCompras.js"

router.use(express.json());

router.get("/", (req, res) => {
  res.send("Back-end do colabuco!");
});

router.use("/pedidos", pedidosRouter);
router.use("/produtos", produtosRouter);
router.use("/artistas", artistasRouter);
router.use("/clientes", clientesRouter);
router.use("/carrinhos-de-compras", carrinhoDeComprasRouter);

export default router;
