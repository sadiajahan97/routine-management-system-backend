-- CreateEnum
CREATE TYPE "Type" AS ENUM ('INTENSE_MODE', 'MOCK_TEST', 'REGULAR');

-- CreateTable
CREATE TABLE "Routine" (
    "chapter" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date" TEXT NOT NULL,
    "endTime" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "startTime" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "type" "Type" NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Routine_pkey" PRIMARY KEY ("id")
);
