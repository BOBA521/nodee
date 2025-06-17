import { prisma } from "../prisma/client";

export class EventController {
    static async create({ title, description, date }: { title: string; description?: string; date: string }) {
        return await prisma.event.create({
            data: {
                title,
                description,
                date: new Date(date),
            },
        });
    }

    static async getById({ id }: { id: number }) {
        return await prisma.event.findUnique({ where: { id } });
    }

    static async getAll() {
        return await prisma.event.findMany();
    }

    static async deleteById({ id }: { id: number }) {
        return await prisma.event.delete({ where: { id } });
    }
}
