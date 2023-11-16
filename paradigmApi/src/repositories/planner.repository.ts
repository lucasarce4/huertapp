import { DependencyContainer, DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";
import { MySqlConnection } from "../core/mysql/mysql.connection";
import { EditRepositoryBase } from "../core/repositories/edit.repository";
import { Planner } from "../models/planner.model";

@Injectable({ lifeTime: DependencyLifeTime.Scoped })
export class PlannerRepository extends EditRepositoryBase<Planner, number> {
    constructor(dependencyContainer: DependencyContainer, connection: MySqlConnection) {
        super(dependencyContainer, connection, Planner, "planner");
    }
}
