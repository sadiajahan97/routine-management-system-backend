import { Routine } from "@prisma/client";
import { prismaClient } from "./config";

export async function createRoutine(
  routine: Pick<
    Routine,
    "chapter" | "date" | "endTime" | "startTime" | "subject" | "type"
  >
) {
  await prismaClient.routine.create({ data: routine });
}

export async function deleteRoutine(id: string) {
  await prismaClient.routine.delete({ where: { id } });
}

export async function findAllRoutines() {
  await prismaClient.routine.findMany();
}

export async function findRoutine(id: string) {
  await prismaClient.routine.findUnique({ where: { id } });
}

export async function updateRoutine(
  id: string,
  routine: Pick<
    Routine,
    "chapter" | "date" | "endTime" | "startTime" | "subject" | "type"
  >
) {
  await prismaClient.routine.update({ data: routine, where: { id } });
}
