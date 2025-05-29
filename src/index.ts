import cors from "cors";
import express, { json } from "express";
import { PORT } from "./config";
import {
  handleCreateRoutine,
  handleDeleteRoutine,
  handleFindAllRoutines,
  handleFindRoutine,
  handleUpdateRoutine,
} from "./controllers";

const app = express();
app.use(cors());
app.use(json());
app.post("/routines", handleCreateRoutine);
app.delete("/routines/:id", handleDeleteRoutine);
app.get("/routines", handleFindAllRoutines);
app.get("/routines/:id", handleFindRoutine);
app.put("/routines/:id", handleUpdateRoutine);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
