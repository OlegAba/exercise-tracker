import express, { Application } from "express";
import mongoose, { Error } from "mongoose";

export class App {
  public app: Application;
  private port: string;
  private apiPath: string;
  private staticPath: string;

  /**
   * Express Server
   * @param port Port Application listens on
   * @param middlewares Array of middleware to be applied to app 
   * @param routes Array of express.Router objects for application routes
   * @param apiPath Base path for this api that will be prepended to all routes
   * @param staticPath path to folder for public files express will make available
   *
   */

  constructor(
    port: string,
    middlewares: any[],
    routes: express.Router[],
    apiPath: string,
    staticPath: string
  ) {
    this.app = express();
    this.port = port;
    this.apiPath = apiPath;
    this.staticPath = staticPath;

    this.middlewaresConfig(middlewares);
    this.routesConfig(routes);
    this.assetsConfig(this.staticPath);
  }

  /**
   * @param middlewares array to be loaded into express app
   */

  private middlewaresConfig(middlewares: any[]): void {
    middlewares.forEach((middleware) => {
      this.app.use(middleware);
    });
  }

  /**
   * Attaches route objects to app, appending routes to `apiPath`
   * @param routes Array of router objects to be attached to the app
   */

  private routesConfig(routes: express.Router[]): void {
    routes.forEach((route) => {
      this.app.use(this.apiPath, route);
    });
  }

  /**
   * Enable express to serve up static assets
   */

  private assetsConfig(path: string): void {
    this.app.use(express.static(path));
  }

  /**
   * @param middleware to be loaded into express app
   */

  public addMiddleware(middleware: any): void {
    this.app.use(middleware);
  }

  /**
   * Creates a connection to a MongoDB instance using mongoose
   * @param uri MongoDB connection string
   */

  public connectMongoDB(uri: string): void {
    const connect = () => {
      mongoose.connect(uri)
        .then(() => {
          console.log("CONNECTED TO API DATABASE");
          return;
        })
        .catch((err: Error) => {
          console.log("API DATABASE CONNECTION ERROR \n", err.message);
          return process.exit(1);
        });
    };

    connect();

    mongoose.connection.on("disconnected", connect);
  }

  /**
   * Start the Express app
   */

  public listen(): void {
    this.app.listen(this.port, (): void => {
      console.log("APP LISTENING ON PORT", this.port);
    });
  }
}