import { DataSource, Repository } from "typeorm";
import { ITranslateRepository } from "@/infra/repository/interface.translate.repository";
import { TranslationInput } from "../../IUseCaseTranslation";
import { Translation } from "../../model/Translation";
import { Service } from "typedi";
import { DBConnector } from "../../data-source";

@Service()
export class TranslateRepository implements ITranslateRepository {
    private readonly repo: Repository<Translation>; 

    public constructor(dbConnector: DBConnector) {
        this.repo = dbConnector.source.getRepository(Translation);
    }
    
    async getTranslate(input: TranslationInput): Promise<Translation | null> {
        return this.repo.findOne({ where: {
            source: input.source,
            destination: input.destination,
            text: input.text,
        }});
    }

    add(input: any): Promise<Translation> {
        return this.repo.save(input);
    }

    fetchHistories(): Promise<Translation[]> {
        return this.repo.find();
    }
}
