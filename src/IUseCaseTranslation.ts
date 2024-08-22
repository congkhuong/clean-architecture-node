import { Translation } from "./models/Translation";

export interface TranslationInput {
    text: string;
    source: string;
    destination: string;
}

export interface IUseCaseTranslation {
    translate(input: TranslationInput): Promise<Translation>;
    fetchHistories(): Promise<Translation[]>;
}
