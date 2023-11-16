import { DependencyContainer, DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";
import { MySqlConnection } from "../core/mysql/mysql.connection";
import { EditRepositoryBase } from "../core/repositories/edit.repository";
import { Plant } from "../models/plant.model";

@Injectable({ lifeTime: DependencyLifeTime.Scoped })
export class PlantRepository extends EditRepositoryBase<Plant, number> {
    constructor(dependencyContainer: DependencyContainer, connection: MySqlConnection) {
        super(dependencyContainer, connection, Plant, "plants");
    }
}
