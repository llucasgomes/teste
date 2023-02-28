import express from "express";
import { CustomerRouter } from "./customer";
import { PurchaseRouter } from "./purchase";

export const routes = express.Router();

routes.use("/customer", CustomerRouter);
routes.use("/purchase", PurchaseRouter);
