import { DependencyContainer, DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";
import { MySqlConnection } from "../core/mysql/mysql.connection";
import { EditRepositoryBase } from "../core/repositories/edit.repository";
import { Task } from "../models/task.model";

@Injectable({ lifeTime: DependencyLifeTime.Scoped })
export class OrchardTaskRepository extends EditRepositoryBase<Task, number> {
    constructor(dependencyContainer: DependencyContainer, connection: MySqlConnection) {
        super(dependencyContainer, connection, Task, "tasks");
    }
}
