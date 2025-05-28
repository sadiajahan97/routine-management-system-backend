import { PrismaClient } from "@prisma/client";
import "dotenv/config";

export const PORT = process.env.PORT || 3000;

export const prismaClient = new PrismaClient();
