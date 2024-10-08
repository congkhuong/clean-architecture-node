import { Inject, Service } from 'typedi';
import { ITranslateRepository } from '@/infra/repository/interface.translate.repository';
import { IGoogleService } from '../../../infra/google/interface.google.service';
import { IUseCaseTranslation, TranslationInput } from '../../../IUseCaseTranslation';
import { Translation } from '../../../model/Translation';
import { TranslateRepository } from '../../../infra/repository/translate.repository';
import { GoogleService } from '../../../infra/google/google.service';


// Move logic to TranslateUseCase
@Service()
export class TranslationService implements IUseCaseTranslation {
    constructor(
        @Inject(() => TranslateRepository) public repo: ITranslateRepository,
        @Inject(() => GoogleService) public googleService: IGoogleService,
    ) {}

    async translate(input: TranslationInput): Promise<Translation> {
        let translation = (await this.repo.getTranslate(input)) as Translation;

        if (translation) {
            return translation;
        }

        const translatedText = await this.googleService.translate(input.source, input.destination, input.text);

        if (translatedText) {
            translation = await this.repo.add({
                ...input,
                translatedText,
            });
        }

        return translation;
    }

    async fetchHistories(): Promise<Translation[]> {
        return [] as any;
    }
}
