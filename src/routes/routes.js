import express from "express";
const router = express.Router();

import pedidosRouter from "./pedidos.js";
import produtosRouter from "./produto.js";

router.use(express.json());

router.get("/", (req, res) => {
  res.send("Back-end do colabuco!");
});

router.use("/pedidos", pedidosRouter);
router.use("/produtos", produtosRouter);

export default router;
