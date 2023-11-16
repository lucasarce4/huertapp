import { Action, ApiController, Controller } from "@miracledevs/paradigm-express-webapi";
import { UsersRepository } from "../repositories/users.repository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

@Controller({ route: "/api/auth" })
export class AuthController extends ApiController {
    constructor(private repo: UsersRepository) {
        super();
    }

    @Action({ route: "/", fromBody: true })
    async post(): Promise<void> {
        try {
            const userEmail = this.httpContext.request.body.user_email;
            const userPass = this.httpContext.request.body.user_password;
            const findUser = await this.repo.find("user_email = ? ", [userEmail]);
            console.log(await bcrypt.compare(userPass, findUser[0].user_password));
            if (findUser.length == 0 || !(await bcrypt.compare(userPass, findUser[0].user_password))) {
                this.httpContext.response.sendStatus(409);
            } else {
                const { id } = findUser[0];
                const token = jwt.sign({ user_email: userEmail, user_id: id }, process.env.jwt_secret);
                this.httpContext.response.send(token);
                this.httpContext.response.status(200);
            }
            return;
        } catch {
            this.httpContext.response.sendStatus(500);
            return;
        }
    }
}
