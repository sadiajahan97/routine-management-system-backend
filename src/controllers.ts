import { Request, Response } from "express";
import {
  createRoutine,
  deleteRoutine,
  findAllRoutines,
  findRoutine,
  updateRoutine,
} from "./db.service";

export async function handleCreateRoutine(req: Request, res: Response) {
  try {
    const { routine } = req.body;
    await createRoutine(routine);
    res
      .status(201)
      .json({ data: null, message: "Routine created successfully" });
  } catch (error) {
    res.status(500).json({
      data: null,
      message: `${(error as Error).name}: ${(error as Error).message}`,
    });
  }
}

export async function handleDeleteRoutine(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await deleteRoutine(id);
    res
      .status(200)
      .json({ data: null, message: "Routine deleted successfully" });
  } catch (error) {
    res.status(500).json({
      data: null,
      message: `${(error as Error).name}: ${(error as Error).message}`,
    });
  }
}

export async function handleFindAllRoutines(req: Request, res: Response) {
  try {
    const routines = await findAllRoutines();
    res
      .status(200)
      .json({ data: { routines }, message: "All routines found successfully" });
  } catch (error) {
    res.status(500).json({
      data: null,
      message: `${(error as Error).name}: ${(error as Error).message}`,
    });
  }
}

export async function handleFindRoutine(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const routine = await findRoutine(id);
    res
      .status(200)
      .json({ data: { routine }, message: "Routine found successfully" });
  } catch (error) {
    res.status(500).json({
      data: null,
      message: `${(error as Error).name}: ${(error as Error).message}`,
    });
  }
}

export async function handleUpdateRoutine(req: Request, res: Response) {
  try {
    const { routine } = req.body;
    const { id } = req.params;
    await updateRoutine(id, routine);
    res
      .status(200)
      .json({ data: null, message: "Routine updated successfully" });
  } catch (error) {
    res.status(500).json({
      data: null,
      message: `${(error as Error).name}: ${(error as Error).message}`,
    });
  }
}
