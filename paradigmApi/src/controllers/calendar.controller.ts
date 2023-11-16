import { Action, ApiController, Controller } from "@miracledevs/paradigm-express-webapi";
import { AuthFilter } from "../filters/auth.filter";
import { CalendarRepository } from "../repositories/calendar.repository";

@Controller({ route: "/api/calendar", filters: [AuthFilter] })
export class CalendarController extends ApiController {
    constructor(private repo: CalendarRepository) {
        super();
    }

    @Action({ route: "/:id" })
    async get(id: number): Promise<void> {
        try {
            const calendar = await this.repo.find("? = id_orchard", [id]);
            this.httpContext.response.send(calendar);
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
            const { id_orchard, title, start_date, end_date } = this.httpContext.request.body;
            const idResult = await this.repo.insertOne({ id_orchard, title, start_date, end_date });
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
}
