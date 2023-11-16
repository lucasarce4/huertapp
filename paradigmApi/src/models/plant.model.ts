import { DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";

@Injectable({ lifeTime: DependencyLifeTime.Transient })
export class Plant {
    id? = 0;
    id_orchard = 0;
    name = "";
    description? = "";
    image? = "";
    start_date = "";
    end_date = "";
}
