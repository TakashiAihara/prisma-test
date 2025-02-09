import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

describe('Task create', () => {
    afterEach(async () => {
        await prisma.task.deleteMany();
    });

    afterAll(async () => {
        await prisma.$disconnect();
    });

    test('should create a task', async () => {
        const task = await prisma.task.create({
            data: {
                title: 'Task 1',
            },
        });

        expect(task).toHaveProperty('id');
        expect(task.title).toBe('Task 1');
        expect(task.status).toBe('in progress');
    });
});
