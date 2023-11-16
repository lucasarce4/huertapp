import { DependencyContainer, DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";
import { MySqlConnection } from "../core/mysql/mysql.connection";
import { EditRepositoryBase } from "../core/repositories/edit.repository";
import { Task } from "../models/task.model";

@Injectable({ lifeTime: DependencyLifeTime.Scoped })
export class TaskRepository extends EditRepositoryBase<Task, number> {
    constructor(dependencyContainer: DependencyContainer, connection: MySqlConnection) {
        super(dependencyContainer, connection, Task, "tasks");
    }
    async filterTask(args: any): Promise<Task[]> {
        const [rows] = await this.connection.connection.execute(
            "SELECT t.* FROM tasks t,user_orchards uo WHERE uo.user_email = ? AND uo.id_orchard = t.id_orchard",
            args
        );
        return this.map(rows, this.entityType);
    }
}
