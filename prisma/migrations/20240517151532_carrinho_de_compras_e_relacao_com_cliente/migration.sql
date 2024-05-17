-- CreateTable
CREATE TABLE "CarrinhoDeCompras" (
    "idCarrinhoDeCompras" TEXT NOT NULL,
    "valor" DECIMAL(10,2) NOT NULL,
    "idCliente" TEXT NOT NULL,

    CONSTRAINT "CarrinhoDeCompras_pkey" PRIMARY KEY ("idCarrinhoDeCompras")
);

-- CreateIndex
CREATE UNIQUE INDEX "CarrinhoDeCompras_idCliente_key" ON "CarrinhoDeCompras"("idCliente");

-- AddForeignKey
ALTER TABLE "CarrinhoDeCompras" ADD CONSTRAINT "CarrinhoDeCompras_idCliente_fkey" FOREIGN KEY ("idCliente") REFERENCES "clientes"("idCliente") ON DELETE RESTRICT ON UPDATE CASCADE;
