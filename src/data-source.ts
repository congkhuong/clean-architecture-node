import { DataSource } from "typeorm";
import { Translation } from "./model/Translation";
import { Service } from "typedi";
  
@Service()
export class DBConnector {
    public source: DataSource; 

    constructor() {
        console.log('DBConnector')
        this.init();
    }

    init(): void {
        this.source = new DataSource({
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
        });

        this.source.initialize().catch((error) => console.log(error))};
}
