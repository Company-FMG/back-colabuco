-- CreateTable
CREATE TABLE "produtos" (
    "idProduto" TEXT NOT NULL,
    "nome" VARCHAR(50) NOT NULL,
    "categoria" VARCHAR(50) NOT NULL,
    "descricao" VARCHAR(200) NOT NULL,
    "dimensao" VARCHAR(25) NOT NULL,
    "preco" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "produtos_pkey" PRIMARY KEY ("idProduto")
);
