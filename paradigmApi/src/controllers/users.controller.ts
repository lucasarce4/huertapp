import { Action, ApiController, Controller } from "@miracledevs/paradigm-express-webapi";
import { UsersRepository } from "../repositories/users.repository";
import bcrypt from "bcrypt";
import { AuthFilter } from "../filters/auth.filter";

@Controller({ route: "/api/users" })
export class UsersController extends ApiController {
    constructor(private repo: UsersRepository) {
        super();
    }

    @Action({ route: "/" ,filters: [AuthFilter] })
    async get(): Promise<void> {
        try {
            const { user_id }: { user_id: number } = this.httpContext.request.body.user;
            const user = await this.repo.getById(user_id);
            this.httpContext.response.send(user);
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
            const userPass = this.httpContext.request.body.user_password;
            const hashPass = await bcrypt.hash(userPass, 10);
            const userName = this.httpContext.request.body.user_name;
            const userEmail = this.httpContext.request.body.user_email;
            const find = await this.repo.find("user_name = ?", [userName]);
            if (find.length === 0) {
                await this.repo.insertOne({
                    user_name: userName,
                    user_password: hashPass,
                    user_email: userEmail,
                });
                this.httpContext.response.sendStatus(200);
            } else {
                this.httpContext.response.sendStatus(409);
            }
            return;
        } catch {
            this.httpContext.response.sendStatus(500);
            return;
        }
    }

    @Action({ fromBody: true })
    async put(): Promise<void> {
        try {
            const { id, user_name, user_password, user_email, user_photo } = this.httpContext.request.body;
            const hashPass = await bcrypt.hash(user_password, 10);
            const user = await this.repo.update({ id, user_name, user_password: hashPass, user_email, user_photo });
            this.httpContext.response.send(user);
            this.httpContext.response.status(200);
            return;
        } catch {
            this.httpContext.response.sendStatus(500);
            return;
        }
    }
}
