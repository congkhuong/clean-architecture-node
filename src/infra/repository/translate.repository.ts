import { Repository } from "typeorm";
import { ITranslateRepository } from "../../ITranslateRepository";
import { TranslationInput } from "../../IUseCaseTranslation";
import { Translation } from "../../models/Translation";

export class TranslateRepository implements ITranslateRepository {
    constructor(
        private repo: Repository<Translation>,
    ) {}

    async getTranslate(input: TranslationInput): Promise<Translation | null> {
        return this.repo.findOne({ where: {
            source: input.source,
            destination: input.destination,
            text: input.text,
        }});
    }

    create(input: any): Promise<Translation> {
        return this.repo.save(input);
    }

    fetchHistories(): Promise<Translation[]> {
        return this.repo.find();
    }
}

