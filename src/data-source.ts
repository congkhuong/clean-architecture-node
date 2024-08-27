import { DataSource } from "typeorm";
import { Translation } from "./models/Translation";
import { Service } from "typedi";
  
@Service()
export class DBConnector {
    public source: DataSource; 

    public constructor() {
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

        this.source.initialize()
            .then(() => {
                console.log('okay')
                // here you can start to work with your database
            })
            .catch((error) => console.log(error))};
}
