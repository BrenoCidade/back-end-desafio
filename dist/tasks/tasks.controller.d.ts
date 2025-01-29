import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Tasks } from '@prisma/client';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    create(createTaskDto: CreateTaskDto): Promise<Tasks>;
    findAll(): Promise<Tasks[]>;
    findOne(id: string): Promise<Tasks>;
    update(id: string, updateTaskDto: UpdateTaskDto): Promise<Tasks>;
    delete(id: string): Promise<{
        title: string;
        description: string | null;
        status: boolean;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
