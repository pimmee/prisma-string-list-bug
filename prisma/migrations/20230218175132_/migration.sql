/*
  Warnings:

  - You are about to drop the column `postIds` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "postIds",
ADD COLUMN     "post_ids" TEXT[];
