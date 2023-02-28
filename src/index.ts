import cors from "cors";
import dotenv from "dotenv";
import express, { json } from "express";
import { PORT } from "./constants";
import { routes } from "./routes";

dotenv.config();

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(json());
app.use(routes);

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});
