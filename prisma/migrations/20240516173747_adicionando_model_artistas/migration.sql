-- AlterTable
ALTER TABLE "produtos" ADD COLUMN     "artistaIdArtista" TEXT;

-- CreateTable
CREATE TABLE "artistas" (
    "idArtista" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "categoriaArte" TEXT NOT NULL,
    "politicaEntregaFrete" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "artistas_pkey" PRIMARY KEY ("idArtista")
);

-- CreateIndex
CREATE UNIQUE INDEX "artistas_cnpj_key" ON "artistas"("cnpj");
