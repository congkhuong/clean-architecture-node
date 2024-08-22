"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const Translation_1 = require("./models/Translation");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 33066,
    username: "root",
    password: "",
    database: "clean_architecture",
    synchronize: true,
    logging: true,
    entities: [Translation_1.Translation],
    subscribers: [],
    migrations: [],
});
