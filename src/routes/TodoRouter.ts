import { Router } from "express";
import { TodoController } from "../controllers";
import { IRoutes } from "./IRoutes";

class TodoRouter implements IRoutes {
  router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  routes(): void {
    this.router.get("/", TodoController.index);
    this.router.post("/store", TodoController.store);
    this.router.put("/:id", TodoController.update);
    this.router.delete("/:id", TodoController.delete);
    this.router.get("/:id", TodoController.show);
  }
}

export default new TodoRouter().router;
