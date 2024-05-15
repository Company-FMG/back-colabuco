-- CreateTable
CREATE TABLE "pedidos" (
    "idPedido" TEXT NOT NULL,
    "opcoesEntrega" TEXT NOT NULL,
    "valor" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "pedidos_pkey" PRIMARY KEY ("idPedido")
);
