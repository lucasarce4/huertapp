import { DependencyContainer, DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";
import { MySqlConnection } from "../core/mysql/mysql.connection";
import { EditRepositoryBase } from "../core/repositories/edit.repository";
import { User_Orchards } from "../models/user_orchards.model";

@Injectable({ lifeTime: DependencyLifeTime.Scoped })
export class User_OrchardsRepository extends EditRepositoryBase<User_Orchards, number> {
    constructor(dependencyContainer: DependencyContainer, connection: MySqlConnection) {
        super(dependencyContainer, connection, User_Orchards, "user_orchards");
    }
}
