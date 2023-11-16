import { HttpContext, IFilter } from "@miracledevs/paradigm-express-webapi";
import { DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";
import jwt from "jsonwebtoken";

@Injectable({ lifeTime: DependencyLifeTime.Scoped })
export class AuthFilter implements IFilter {
    async beforeExecute(httpContext: HttpContext): Promise<void> {
        try {
            const token = httpContext.request.headers["authorization"];
            const decodedToken = jwt.verify(token, process.env.jwt_secret);
            httpContext.request.body.user = decodedToken;
            if (!decodedToken) {
                httpContext.response.writeHead(302, { Location: "/login" });
            }
        } catch {
            httpContext.response.sendStatus(500);
        }
    }
}
