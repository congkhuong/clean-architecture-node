import { DeepPartial, Repository } from "typeorm";
import { TranslationInput } from "../../IUseCaseTranslation";
import { Translation } from "@/models/Translation";

export interface ITranslateRepository {
    getTranslate(input: TranslationInput): Promise<Translation | null>;
    add(input: any): Promise<Translation>;
    fetchHistories(): Promise<Translation[]>;
}
