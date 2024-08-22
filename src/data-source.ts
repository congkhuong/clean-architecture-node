import { DataSource } from "typeorm"
import { Translation } from "./models/Translation"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 33066,
    username: "root",
    password: "",
    database: "clean_architecture",
    synchronize: true,
    logging: true,
    entities: [Translation],
    subscribers: [],
    migrations: [],
})
