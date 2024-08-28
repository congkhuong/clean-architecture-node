import { Translation } from "./model/Translation";

export interface TranslationInput {
    text: string;
    source: string;
    destination: string;
}

export interface IUseCaseTranslation {
    translate(input: TranslationInput): Promise<Translation>;
    fetchHistories(): Promise<Translation[]>;
}
