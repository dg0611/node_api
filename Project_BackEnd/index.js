import { express } from "express";
import { pkg } from "body-parser";
import { router } from "./routes/router.js";

import sequelize from "./utils/database.js";
import association from "./models/Association.js";
const app = express();
const { json, urlencoded } = pkg;

app.use(json());
app.use(urlencoded({ extends: true }));

(async () => {
  try {
    association.associations(); 
    await sequelize.sync();
    app.use("/", router);
    app.listen(3000, () => {
      console.console.log("Escutando porta 3000");
    });
  } catch (error) {
    console.log(error);
  }
})();

app.use("/", router);
