import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/database/prisma.service';
import { Tasks } from '@prisma/client';
export declare class TasksService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createTaskDto: CreateTaskDto): Promise<Tasks>;
    findAll(): Promise<Tasks[]>;
    findById(id: number): Promise<Tasks>;
    update(id: number, updateTaskDto: UpdateTaskDto): Promise<Tasks>;
    delete(id: number): Promise<{
        title: string;
        description: string | null;
        status: boolean;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
