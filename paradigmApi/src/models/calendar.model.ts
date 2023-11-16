import { DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";

@Injectable({ lifeTime: DependencyLifeTime.Transient })
export class Calendar {
    id? = 0;
    id_orchard = 0;
    title = "";
    start_date = "";
    end_date = "";
}
