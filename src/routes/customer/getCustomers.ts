import type { Request, Response } from "express";
import { prismaClient } from "../../services/prismaClientService";

export async function getCustomersHandler(_request: Request, response: Response) {
    const customers = await prismaClient.customer.findMany();
    response.status(200).json(customers);
}
