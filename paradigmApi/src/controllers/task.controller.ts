import { Action, ApiController, Controller } from "@miracledevs/paradigm-express-webapi";
import { AuthFilter } from "../filters/auth.filter";
import { TaskRepository } from "../repositories/task.repository";

@Controller({ route: "/api/task", filters: [AuthFilter] })
export class TaskController extends ApiController {
    constructor(private repo: TaskRepository) {
        super();
    }

    @Action({ route: "/:id?" })
    async get(id?: number): Promise<void> {
        try {
            if (id) {
                const task = await this.repo.find("? = id", [id]);
                this.httpContext.response.send(task);
                this.httpContext.response.status(200);
                return;
            } else {
                const { user_email }: { user_email: string } = this.httpContext.request.body.user;
                const taskFilter = await this.repo.filterTask([user_email]);
                this.httpContext.response.send(taskFilter);
                this.httpContext.response.status(200);
                return;
            }
        } catch {
            this.httpContext.response.sendStatus(500);
            return;
        }
    }

    @Action({ route: "/", fromBody: true })
    async post(): Promise<void> {
        try {
            const { id_orchard, title, description, state } = this.httpContext.request.body;
            const idResult = await this.repo.insertOne({ id_orchard, title, description, state });
            this.httpContext.response.send(idResult);
            this.httpContext.response.status(200);
            return;
        } catch {
            this.httpContext.response.sendStatus(500);
            return;
        }
    }

    @Action({ route: "/:id" })
    async delete(id: number): Promise<void> {
        try {
            await this.repo.delete(id);
            this.httpContext.response.sendStatus(200);
            return;
        } catch {
            this.httpContext.response.sendStatus(500);
            return;
        }
    }

    @Action({ fromBody: true })
    async put(): Promise<void> {
        try {
            const { id, id_orchard, title, description, state } = this.httpContext.request.body;
            const idResult = await this.repo.update({ id, id_orchard, title, description, state });
            this.httpContext.response.send(idResult);
            this.httpContext.response.status(200);
            return;
        } catch {
            this.httpContext.response.sendStatus(500);
            return;
        }
    }
}
