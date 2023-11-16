import { DependencyContainer, DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";
import { MySqlConnection } from "../core/mysql/mysql.connection";
import { EditRepositoryBase } from "../core/repositories/edit.repository";
import { User } from "../models/user.model";

@Injectable({ lifeTime: DependencyLifeTime.Scoped })
export class UsersRepository extends EditRepositoryBase<User, number> {
    constructor(dependencyContainer: DependencyContainer, connection: MySqlConnection) {
        super(dependencyContainer, connection, User, "users");
    }
}
