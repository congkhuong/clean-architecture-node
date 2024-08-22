import { Translation } from "./models/Translation";
import { TranslationInput } from "./IUseCaseTranslation";

export interface IGoogleService {
    translate(source: string, destination: string, text: string): Promise<Translation>;
}
