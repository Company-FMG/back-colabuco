/*
  Warnings:

  - A unique constraint covering the columns `[idCliente]` on the table `pedidos` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[idCarrinho]` on the table `pedidos` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `idCarrinho` to the `pedidos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idCliente` to the `pedidos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pedidos" ADD COLUMN     "idCarrinho" TEXT NOT NULL,
ADD COLUMN     "idCliente" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "pedidos_idCliente_key" ON "pedidos"("idCliente");

-- CreateIndex
CREATE UNIQUE INDEX "pedidos_idCarrinho_key" ON "pedidos"("idCarrinho");

-- AddForeignKey
ALTER TABLE "pedidos" ADD CONSTRAINT "pedidos_idCliente_fkey" FOREIGN KEY ("idCliente") REFERENCES "clientes"("idCliente") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedidos" ADD CONSTRAINT "pedidos_idCarrinho_fkey" FOREIGN KEY ("idCarrinho") REFERENCES "carrinhos_de_compras"("idCarrinhoDeCompras") ON DELETE RESTRICT ON UPDATE CASCADE;
