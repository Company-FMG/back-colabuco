-- CreateTable
CREATE TABLE "clientes" (
    "idCliente" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" VARCHAR(11) NOT NULL,
    "telefone" VARCHAR(11) NOT NULL,
    "senha" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,

    CONSTRAINT "clientes_pkey" PRIMARY KEY ("idCliente")
);

-- CreateIndex
CREATE UNIQUE INDEX "clientes_email_key" ON "clientes"("email");

-- CreateIndex
CREATE UNIQUE INDEX "clientes_cpf_key" ON "clientes"("cpf");
