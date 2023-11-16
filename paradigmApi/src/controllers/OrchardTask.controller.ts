import { Action, ApiController, Controller } from "@miracledevs/paradigm-express-webapi";
import { AuthFilter } from "../filters/auth.filter";
import { OrchardTaskRepository } from "../repositories/orchardTask.repository";

@Controller({ route: "/api/orchard_task", filters: [AuthFilter] })
export class OrchardTaskController extends ApiController {
    constructor(private repo: OrchardTaskRepository) {
        super();
    }

    @Action({ route: "/:id" })
    async get(id: number): Promise<void> {
        try {
            const task = await this.repo.find("? = id_orchard", [id]);
            this.httpContext.response.send(task);
            this.httpContext.response.status(200);
            return;
        } catch {
            this.httpContext.response.sendStatus(500);
            return;
        }
    }
}
