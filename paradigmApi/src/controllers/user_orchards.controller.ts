import { Action, ApiController, Controller } from "@miracledevs/paradigm-express-webapi";
import { AuthFilter } from "../filters/auth.filter";
import { User_OrchardsRepository } from "../repositories/user_orchards.repository";

@Controller({ route: "/api/user_orchards", filters: [AuthFilter] })
export class User_OrchardsController extends ApiController {
    constructor(private repo: User_OrchardsRepository) {
        super();
    }

    @Action({ route: "/:id" })
    async get(id: number): Promise<void> {
        try {
            const users = await this.repo.find("id_orchard = ?", [id]);
            this.httpContext.response.send(users);
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
            const reqBody = this.httpContext.request.body;
            let user_email;
            let user_role;
            const currentUserEmail = this.httpContext.request.body.user.user_email;
            if (reqBody.user_email !== undefined) {
                user_email = reqBody.user_email.user_email;
                user_role = 0;
            } else {
                user_email = reqBody.user.user_email;
                user_role = 1;
            }
            const { id_orchard } = this.httpContext.request.body;
            const currentUser = await this.repo.find("user_email = ? AND id_orchard = ?", [currentUserEmail, id_orchard]);
            if (currentUser[0]?.user_role === 0) {
                this.httpContext.response.sendStatus(401);
                return;
            }
            const find = await this.repo.find("user_email = ? AND id_orchard = ?", [user_email, id_orchard]);
            if (find.length === 0) {
                await this.repo.insertOne({ id_orchard, user_email, user_role });
                this.httpContext.response.status(200);
            } else {
                this.httpContext.response.status(409);
                this.httpContext.response.send("Email already exist");
            }

            return;
        } catch {
            this.httpContext.response.sendStatus(500);
            return;
        }
    }

    @Action({ route: "/:id" })
    async delete(id: number): Promise<void> {
        try {
            const { id_orchard, user_email } = this.httpContext.request.body;
            const currentUserEmail = this.httpContext.request.body.user.user_email;
            const currentUser = await this.repo.find("user_email = ? AND id_orchard = ?", [currentUserEmail, id_orchard]);
            const find = await this.repo.find("user_email = ? AND id_orchard = ?", [user_email, id_orchard]);
            if (currentUser[0].user_role === 1 && currentUserEmail !== find[0].user_email) {
                await this.repo.delete(find[0].id);
                this.httpContext.response.sendStatus(200);
            } else {
                this.httpContext.response.sendStatus(401);
            }
            return;
        } catch {
            this.httpContext.response.sendStatus(500);
            return;
        }
    }
}
