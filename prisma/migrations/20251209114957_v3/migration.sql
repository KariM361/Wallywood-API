/*
  Warnings:

  - You are about to drop the column `postertId` on the `cartlines` table. All the data in the column will be lost.
  - Added the required column `posterId` to the `cartlines` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `cartlines` DROP FOREIGN KEY `cartlines_postertId_fkey`;

-- DropIndex
DROP INDEX `cartlines_postertId_fkey` ON `cartlines`;

-- AlterTable
ALTER TABLE `cartlines` DROP COLUMN `postertId`,
    ADD COLUMN `posterId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `cartlines` ADD CONSTRAINT `cartlines_posterId_fkey` FOREIGN KEY (`posterId`) REFERENCES `posters`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
