import express, { Request, Response } from "express";
import cors from "cors";
import { Pool } from "pg";

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

app.get("/", async (_req: Request, res: Response) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ message: "API is running with TypeScript!", time: result.rows[0].now });
  } catch (error) {
    res.status(500).json({ error: "Database connection failed" });
  }
});

export default app;
