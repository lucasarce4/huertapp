import { Action, ApiController, Controller } from "@miracledevs/paradigm-express-webapi";
import { AuthFilter } from "../filters/auth.filter";
import { PlannerRepository } from "../repositories/planner.repository";

@Controller({ route: "/api/planner", filters: [AuthFilter] })
export class PlannerController extends ApiController {
    constructor(private repo: PlannerRepository) {
        super();
    }

    @Action({ route: "/:id" })
    async get(id: number): Promise<void> {
        try {
            const grid = await this.repo.getById(id);
            this.httpContext.response.send(grid);
            this.httpContext.response.status(200);
            return;
        } catch {
            this.httpContext.response.sendStatus(204);
            return;
        }
    }

    @Action({ route: "/", fromBody: true })
    async post(): Promise<void> {
        try {
            const { id, xSize, ySize, grid } = this.httpContext.request.body;
            const idResult = await this.repo.insertOne({ id, xSize, ySize, grid });
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
            this.httpContext.response.status(200);
            return;
        } catch {
            this.httpContext.response.sendStatus(500);
            return;
        }
    }
}
