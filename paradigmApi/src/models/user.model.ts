import { DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";

@Injectable({ lifeTime: DependencyLifeTime.Transient })
export class User {
    id? = 0;
    user_name = "";
    user_password = "";
    user_email = "";
    user_photo? = "";
}
