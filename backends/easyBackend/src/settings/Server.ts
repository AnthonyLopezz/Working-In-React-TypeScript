import dotenv from "dotenv"; // Variables de configuración
import cors from "cors"; //Bloquear acceso a los usuarios
import morgan from "morgan"; //Peticiones Http
import express from "express";
import ConnectionDb from "./connection/ConnectionDb";
import userRoute from "../routes/UserRoute";
import security from "../middlewares/Security";
import planeRoute from "../routes/PlaneRoute";

// Here should be the routes's imports.

class Server {
  public app: express.Application;

  constructor() {
    dotenv.config({ path: "variables.env" });
    ConnectionDb();
    this.app = express();

    this.loadSettings();
    this.loadRoutes();
  }

  public loadSettings() {
    //The most basic configuration.
    this.app.set("PORT", process.env.PORT);
    this.app.use(cors());
    this.app.use(morgan("dev"));
    this.app.use(express.json({ limit: "20mb" }));
    this.app.use(express.urlencoded({ extended: true })); // Recibir parametros de cualquier tipo y codifica eso y recibelo
  }

  public loadRoutes() {
    // private
    this.app.use("/api/private/users", userRoute);
    this.app.use("/api/private/planes", security.verifyToken, planeRoute);

  }

  public startBackend() {
    this.app.listen(this.app.get("PORT"), () => {
      console.log("SERVER: ", this.app.get("PORT"));
    });
  }
}

export default Server;
