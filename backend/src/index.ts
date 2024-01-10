import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

import productRoute from "../routes/productRoute";
import categoryRoute from "../routes/categoryRoute";

const app: Express = express();
const port = process.env.PORT || 3001;

const cors = require("cors");
app.use(cors());
// app.use(cors({
//   origin: "http://localhost:3000", // Allow requests from localhost:3000
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Allow these methods
//   credentials: true, // Allow cookies and other credentials to be sent
// }));
app.use(express.json());

app.use("/api/products", productRoute);
app.use("/api/categories", categoryRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("hi there :)");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
