import { ApiServer } from "@miracledevs/paradigm-express-webapi";
import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "./docs/swagger.json";
import { MySqlConnectionFilter } from "./filters/mysql.filter";
import { HealthController } from "./controllers/health.controller";
import { Configuration } from "./configuration/configuration";
import { OrchardController } from "./controllers/orchards.controller";
import { PlannerController } from "./controllers/planner.controller";
import { TaskController } from "./controllers/task.controller";
import { CalendarController } from "./controllers/calendar.controller";
import { UsersController } from "./controllers/users.controller";
import { PlantsController } from "./controllers/plants.controller";
import { OrchardTaskController } from "./controllers/orchardTask.controller";
import { AuthController } from "./controllers/auth.controller";
import { User_OrchardsController } from "./controllers/user_orchards.controller";

/**
 * Represents the api server application.
 * It contains the main DI container, the router and express application.
 */
export class Server extends ApiServer {
    /**
     * Configures the server before starting.
     */
    protected configureApplication(): void {
        this.logger.debug("Configuring application...");
        const configuration = this.configurationBuilder.build(Configuration);
        const port = configuration.port || process.env.PORT || 5000;

        this.expressApplication
            .disable("etag")
            .set("port", port)
            .use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))
            .use(cors({ exposedHeaders: "x-auth" }))
            .use(express.urlencoded({ extended: false }))
            .use(express.json())
            .listen(port, () => this.logger.debug(`Listening on: http://localhost:${port}`));

        this.registerControllers([
            HealthController,
            OrchardController,
            PlannerController,
            CalendarController,
            TaskController,
            OrchardTaskController,
            UsersController,
            PlantsController,
            AuthController,
            User_OrchardsController,
        ]);
        this.routing.ignoreClosedResponseOnFilters();
        this.routing.registerGlobalFilters([MySqlConnectionFilter]);
    }
}
