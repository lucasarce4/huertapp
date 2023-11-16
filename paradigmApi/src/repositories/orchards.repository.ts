import { DependencyContainer, DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";
import { MySqlConnection } from "../core/mysql/mysql.connection";
import { EditRepositoryBase } from "../core/repositories/edit.repository";
import { Orchard } from "../models/orchard.model";
import { User_Orchards } from "../models/user_orchards.model";

@Injectable({ lifeTime: DependencyLifeTime.Scoped })
export class OrchardRepository extends EditRepositoryBase<Orchard, number> {
    constructor(dependencyContainer: DependencyContainer, connection: MySqlConnection) {
        super(dependencyContainer, connection, Orchard, "orchards");
    }
    async filter(args: any): Promise<Orchard[]> {
        const [rows] = await this.connection.connection.execute(
            "SELECT o.* FROM orchards o,user_orchards uo WHERE o.id = uo.id_orchard AND uo.user_email = ?",
            args
        );
        return this.map(rows, this.entityType);
    }

    async getUserPermits(args: any): Promise<User_Orchards[]> {
        const [rows] = await this.connection.connection.execute("SELECT * FROM user_orchards uo WHERE uo.id_orchard = ? AND uo.user_email = ?", args);
        return this.map(rows, User_Orchards);
    }
}
