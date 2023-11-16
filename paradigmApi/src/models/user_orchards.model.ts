import { DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";

@Injectable({ lifeTime: DependencyLifeTime.Transient })
export class User_Orchards {
    id? = 0;
    id_orchard = 0;
    user_email = "";
    user_role = 0;
}
