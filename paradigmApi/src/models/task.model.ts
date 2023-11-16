import { DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";

@Injectable({ lifeTime: DependencyLifeTime.Transient })
export class Task {
    id? = 0;
    id_orchard = 0;
    title = "";
    description = "";
    state = "";
}
