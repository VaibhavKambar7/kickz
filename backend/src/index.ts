import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

import productRoute from "../routes/productRoute";

const app: Express = express();
const port = process.env.PORT || 3000;

const cors = require('cors')
app.use(cors())

app.use(express.json())

app.use("/api/products",productRoute)

app.get("/", (req: Request, res: Response) => {
  res.send("hi there :)");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});