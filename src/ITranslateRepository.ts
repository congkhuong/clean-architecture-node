import { TranslationInput } from "./IUseCaseTranslation";
import { Translation } from "./models/Translation";

export interface ITranslateRepository {
    getTranslate(input: TranslationInput): Promise<Translation | null>;
    create(input: any): Promise<Translation>;
    fetchHistories(): Promise<Translation[]>;
}
