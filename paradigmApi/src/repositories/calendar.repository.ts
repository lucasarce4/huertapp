import { DependencyContainer, DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";
import { MySqlConnection } from "../core/mysql/mysql.connection";
import { EditRepositoryBase } from "../core/repositories/edit.repository";
import { Calendar } from "../models/calendar.model";

@Injectable({ lifeTime: DependencyLifeTime.Scoped })
export class CalendarRepository extends EditRepositoryBase<Calendar, number> {
    constructor(dependencyContainer: DependencyContainer, connection: MySqlConnection) {
        super(dependencyContainer, connection, Calendar, "calendar");
    }
}
