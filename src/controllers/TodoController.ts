import { Request, Response } from "express";
import { BaseController } from "./BaseController";
import Todo from "../models/Todo";
import { CustomResponse } from "../types/response";
import {
  TodoCreationDto,
  TodoResponseDto,
  TodoUpdateDto,
} from "../dtos/Todo.dto";

class TodoController extends BaseController {
  constructor() {
    super();
  }

  public index = (req: Request, res: Response): void => {
    Todo.findAll().then((todos) => {
      res.send(todos);
    });
  };

  public show = (req: Request, res: Response<CustomResponse>): void => {
    Todo.findOne({
      where: {
        id: req.params.id,
      },
    })
      .then((val) => {
        if (val) {
          res.send({
            data: val,
            message: "Success",
            error: false,
          });
        } else {
          res.status(404).send({
            data: null,
            message: "todo not found",
            error: true,
          });
        }
      })
      .catch((err) => {
        res.send({
          message: err.message,
          error: true,
        });
      });
  };

  public store = (
    req: Request<{}, {}, TodoCreationDto>,
    res: Response<CustomResponse>
  ): void => {
    Todo.create({
      description: req.body.description,
      title: req.body.description,
    })
      .then((todo) => {
        return res.status(201).send({
          message: "Todo created",
          error: false,
          data: todo,
        });
      })
      .catch((err) => {
        return res.status(500).send({
          message: err.message,
          error: true,
          data: null,
        });
      });
  };

  public update = (
    req: Request<{ id: number }, {}, TodoUpdateDto>,
    res: Response<CustomResponse>
  ): void => {
    Todo.update(
      {
        title: req.body.title,
        description: req.body.description,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    ).then((val) => {
      res.send({
        message: "Data updated",
        error: false,
      });
    });
  };

  public delete = (
    req: Request<{ id: number }>,
    res: Response<TodoResponseDto>
  ) => {
    Todo.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((val) => {
        res.send({
          message: "Success delete todo",
          error: false,
        });
      })
      .catch((err) => {
        res.send({
          message: err.message,
          error: true,
        });
      });
  };
}

export default new TodoController();
