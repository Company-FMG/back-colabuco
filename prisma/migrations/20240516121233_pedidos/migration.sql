/*
  Warnings:

  - You are about to alter the column `valor` on the `pedidos` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.

*/
-- AlterTable
ALTER TABLE "pedidos" ALTER COLUMN "valor" SET DATA TYPE DECIMAL(10,2);
