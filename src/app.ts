import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import compression from "compression";
import helmet from "helmet";
import TodoRouter from "./routes/TodoRouter";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.plugins();
    this.routes();
  }

  protected routes(): void {
    this.app.get("/", (req: Request, res: Response) => {
      res.send("hello");
    });
    this.app.use("/todos", TodoRouter);
  }

  protected plugins(): void {
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());
    this.app.use(cors());
    this.app.use(compression());
    this.app.use(helmet());
  }
}

export default new App().app;
