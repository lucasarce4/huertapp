import { Action, ApiController, Controller } from "@miracledevs/paradigm-express-webapi";
import { AuthFilter } from "../filters/auth.filter";
import { PlantRepository } from "../repositories/plant.repository";

@Controller({ route: "/api/plants", filters: [AuthFilter] })
export class PlantsController extends ApiController {
    constructor(private repo: PlantRepository) {
        super();
    }

    @Action({ route: "/:id" })
    async get(id: number): Promise<void> {
        try {
            const plants = await this.repo.find("? = id_orchard", [id]);
            this.httpContext.response.send(plants);
            this.httpContext.response.status(200);
            return;
        } catch {
            this.httpContext.response.sendStatus(500);
            return;
        }
    }

    @Action({ route: "/", fromBody: true })
    async post(): Promise<void> {
        try {
            const { id_orchard, name, description, image, start_date, end_date } = this.httpContext.request.body;
            const idResult = await this.repo.insertOne({ id_orchard, name, description, image, start_date, end_date });
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

    @Action({ fromBody: true })
    async put(): Promise<void> {
        try {
            const idResult = await this.repo.update(this.httpContext.request.body);
            this.httpContext.response.send(idResult);
            this.httpContext.response.status(200);
            return;
        } catch {
            this.httpContext.response.sendStatus(500);
            return;
        }
    }
}
