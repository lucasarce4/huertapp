import { Action, ApiController, Controller } from "@miracledevs/paradigm-express-webapi";
import { AuthFilter } from "../filters/auth.filter";
import { OrchardRepository } from "../repositories/orchards.repository";

@Controller({ route: "/api/orchards", filters: [AuthFilter] })
export class OrchardController extends ApiController {
    constructor(private repo: OrchardRepository) {
        super();
    }

    @Action({ route: "/" })
    async get(): Promise<void> {
        try {
            const { user_email }: { user_email: string } = this.httpContext.request.body.user;
            const orchardFilter = await this.repo.filter([user_email]);
            this.httpContext.response.send(orchardFilter);
            this.httpContext.response.status(200);
            return;
        } catch (err) {
            this.httpContext.response.sendStatus(500);
            return;
        }
    }

    @Action({ route: "/", fromBody: true })
    async post(): Promise<void> {
        try {
            const idResult = await this.repo.insertOne({ orchard_name: this.httpContext.request.body.orchard_name });
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
            const email = this.httpContext.request.body.user.user_email;
            const currentUser = await this.repo.getUserPermits([id, email]);
            if (currentUser[0].user_role !== 1) {
                this.httpContext.response.sendStatus(401);
                return;
            }
            await this.repo.delete(id);
            this.httpContext.response.sendStatus(200);
            return;
        } catch {
            this.httpContext.response.sendStatus(500);
            return;
        }
    }
}
