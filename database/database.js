import { Sequelize } from "sequelize";
import { deliveryModel } from "./models/Delivery.js"

import { configs } from "./configs/databaseConfigs.js";

const database = new Sequelize(configs);

database.define("Delivery", deliveryModel);

async function run() {
  await database.sync();
}
run();

export { database };
