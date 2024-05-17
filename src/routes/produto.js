import express from "express";
const router = express.Router();
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
router.use(express.json());

router.get("/", async (req, res) => {
  try {
    const produtos = await prisma.produto.findMany();
    res.json(produtos);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

router.post("/", async (req, res) => {
  const { idProduto, nome, categoria, descricao, dimensao, preco } = req.body;
  try {
    const produto = await prisma.produto.create({
      data: {
        idProduto,
        nome,
        categoria,
        descricao,
        dimensao,
        preco,
      },
    });
    res.json(produto);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const { nome, categoria, descricao, dimensao, preco } = req.body;

  try {
    const produto = await prisma.produto.update({
      where: { idProduto: id },
      data: { nome, categoria, descricao, dimensao, preco },
    });
    res.json(produto);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const produto = await prisma.produto.delete({
      where: {
        idProduto: id,
      },
    });
    res.json(produto);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});
export default router;
