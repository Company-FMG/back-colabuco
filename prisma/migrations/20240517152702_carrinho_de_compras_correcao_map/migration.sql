/*
  Warnings:

  - You are about to drop the `CarrinhoDeCompras` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CarrinhoDeCompras" DROP CONSTRAINT "CarrinhoDeCompras_idCliente_fkey";

-- DropTable
DROP TABLE "CarrinhoDeCompras";

-- CreateTable
CREATE TABLE "carrinhos_de_compras" (
    "idCarrinhoDeCompras" TEXT NOT NULL,
    "valor" DECIMAL(10,2) NOT NULL,
    "idCliente" TEXT NOT NULL,

    CONSTRAINT "carrinhos_de_compras_pkey" PRIMARY KEY ("idCarrinhoDeCompras")
);

-- CreateIndex
CREATE UNIQUE INDEX "carrinhos_de_compras_idCliente_key" ON "carrinhos_de_compras"("idCliente");

-- AddForeignKey
ALTER TABLE "carrinhos_de_compras" ADD CONSTRAINT "carrinhos_de_compras_idCliente_fkey" FOREIGN KEY ("idCliente") REFERENCES "clientes"("idCliente") ON DELETE RESTRICT ON UPDATE CASCADE;
