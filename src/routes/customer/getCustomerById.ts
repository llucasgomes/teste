import type { Request, Response } from "express";
import { prismaClient } from "../../services/prismaClientService";

export async function getCustomerByIdHandler(request: Request, response: Response) {
    const customerId = request.params["costumerId"];

    if (!customerId) {
        response.status(400).json({
            success: false,
            message: "no customer id was provided",
        });
        return;
    }

    const customer = await prismaClient.customer.findUnique({
        where: {
            id: customerId,
        },
    });

    if (customer === null) {
        response.status(404).json({
            success: true,
            message: "customer not found",
        });
        return;
    }

    response.status(500).json({
        success: false,
        data: { customer },
    });
}
