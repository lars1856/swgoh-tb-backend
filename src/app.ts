import express, { Request, Response } from "express";
import cors from "cors";

const COMLINK_API_URL = process.env.REACT_APP_COMLINK_API_URL;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", async (_req: Request, res: Response) => {
  console.log(COMLINK_API_URL);
  try {
    const guildData = await fetch(`${COMLINK_API_URL}/getEvents`);
    if (!guildData.ok) {
      throw new Error(
        `Response status: ${guildData.status} ${guildData.statusText}`
      );
    }
    const guildJson = await guildData.json();
    console.log(guildJson);
  } catch (error) {
    console.error("Error:", error);
  }
  try {
    const guildData = await fetch(
      "https://swgoh.gg/api/guild-profile/AffwMH3fQlSKrr0HfHR2pA"
    );
    if (!guildData.ok) {
      throw new Error(
        `Response status: ${guildData.status} ${guildData.statusText}`
      );
    }
    const guildJson = await guildData.json();
    console.log(guildJson);
  } catch (error) {
    console.error("Error:", error);
  }
  res.json({ message: "API is running with TypeScript!", time: 0 });
});

export default app;
