/* eslint-disable @typescript-eslint/no-misused-promises */
import express from "express";
import { getCustomerByIdHandler } from "./getCustomerById";

import { getCustomersHandler } from "./getCustomers";
import { createCustomersHandler } from "./postCustomer";

export const CustomerRouter = express.Router();

// CustomerRouter.post("/:customerId", getCustomerByIdHandler);
CustomerRouter.get("/all", getCustomersHandler);
CustomerRouter.post("/novo", createCustomersHandler);
