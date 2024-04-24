import App from "./app";
import sequelize from "./utils/connection";

sequelize
  .sync({ alter: true })
  .then(() => console.log("Database synced"))
  .catch((err: Error) => console.log(`Error synced database ${err.message}`));

const app = App;
app.listen(8000, () => console.log("App run port 8000"));
