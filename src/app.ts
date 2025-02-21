import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", async (_req: Request, res: Response) => {
  res.json({ message: "API is running with TypeScript!", time: 0 });
});

export default app;
