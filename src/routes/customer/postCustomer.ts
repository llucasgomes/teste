import type { Request } from "express";
import { prismaClient } from "../../services/prismaClientService";
import type { Customer } from "@prisma/client";

// type Cliente = {
//     name: string;
//     birthDate: string;
//     address: string;
//     email: string;
// }

// eslint-disable-next-line @typescript-eslint/ban-types
export async function createCustomersHandler(req: Request<{}, {}, Customer>) {
    const { id, name, birthDate, address, email } = req.body;
    console.log(req.body);
    const user = await prismaClient.customer.create({
        data: {
            id,
            name,
            birthDate,
            address,
            email,
        },
    });

    return user;
}
