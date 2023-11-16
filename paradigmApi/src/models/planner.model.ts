import { DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";

@Injectable({ lifeTime: DependencyLifeTime.Transient })
export class Planner {
    id = 0;
    xSize = 0;
    ySize = 0;
    grid = "";
}
