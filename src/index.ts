import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";

const app = express();
const PORT = 3000;

app.use(morgan("tiny"));

app.get(
  "/star-wars",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await fetch(
        "https://swapi.dev/api/people/" + Math.ceil(Math.random() * 10)
      );
      const responseJson = await response.json();

      if (response) {
        res.status(200).json(responseJson);
      }
    } catch (error) {
      console.error(error);
    }
  }
);
app.use("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ ping: "pong" });
});

app.listen(PORT, () => {
  console.log("listening at", PORT);
});
