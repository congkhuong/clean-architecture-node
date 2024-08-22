import { Service } from 'typedi';
import { ITranslateRepository } from '../../../ITranslateRepository';
import { IGoogleService } from '../../../IGoogleService';
import { IUseCaseTranslation, TranslationInput } from '../../../IUseCaseTranslation';
import { Translation } from '../../../models/Translation';

@Service()
export class TranslationService implements IUseCaseTranslation {
    constructor(
        public repo: ITranslateRepository,
        public googleService: IGoogleService,
    ) {}

    async translate(input: TranslationInput): Promise<Translation> {
        let translation = (await this.repo.getTranslate(input)) as Translation;

        if (translation) {
            return translation;
        }

        const translationByGoogle = await this.googleService.translate(input.source, input.destination, input.text);

        if (translationByGoogle) {
            translation = await this.repo.create(translationByGoogle);
        }

        return translation;
    }

    async fetchHistories(): Promise<Translation[]> {
        return [] as any;
    }
}
