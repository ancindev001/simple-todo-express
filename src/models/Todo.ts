import { DataTypes, Model } from "sequelize";
import sequelize from "../utils/connection";
import { Todo as Todoz } from "../types/todo";

class Todo extends Model<Todoz, Todoz> {}

Todo.init(
  {
    title: {
      unique: true,
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "todos",
  }
);

export default Todo;
