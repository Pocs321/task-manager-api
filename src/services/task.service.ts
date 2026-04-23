import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface CreateTaskInput {
  title: string;
  description?: string;
}

interface UpdateTaskInput {
  title?: string;
  description?: string;
  completed?: boolean;
}

export const TaskService = {
  async getAll(page: number, limit: number) {
    const skip = (page - 1) * limit;
    const [tasks, total] = await Promise.all([
      prisma.task.findMany({ skip, take: limit, orderBy: { createdAt: 'desc' } }),
      prisma.task.count(),
    ]);
    return { tasks, total, page, limit };
  },

  async getById(id: string) {
    return prisma.task.findUnique({ where: { id } });
  },

  async create(data: CreateTaskInput) {
    return prisma.task.create({ data });
  },

  async update(id: string, data: UpdateTaskInput) {
    try {
      return await prisma.task.update({ where: { id }, data });
    } catch {
      return null;
    }
  },

  async remove(id: string) {
    try {
      await prisma.task.delete({ where: { id } });
      return true;
    } catch {
      return false;
    }
  },
};
