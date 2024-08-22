import pick from 'lodash.pick';
import { IGoogleService } from '../../../IGoogleService';
import { ITranslateRepository } from '../../../ITranslateRepository';
import { TranslationInput } from '../../../IUseCaseTranslation';
import { Translation } from '../../../models/Translation';
import { TranslationService } from './translation.service';

const translationInDb = {
    source: 'en',
    destination: 'vi',
    text: 'Who are you?',
    translatedText: 'Ban la ai?'
} as Translation;

const translationByGoogle = {
    source: 'vi',
    destination: 'en',
    text: 'Ban la ai?',
    translatedText: 'Who are you?'
} as Translation;

const emptyTranslation = {} as Translation;

const googleErr = new Error('Google');

const notFoundItem = new Error('Not found item');

class MockGoogleService implements IGoogleService {
    async translate(source: string, destination: string, text: string): Promise<Translation> {
        const dataSet = [translationByGoogle] as Translation[];

        const firstItem = dataSet.find((item) => (item.source === source && item.destination === destination && item.text === text))
        
        if (firstItem) return firstItem;

        throw googleErr;
    }
}

class MockTranslateRepository implements ITranslateRepository {
    async getTranslate(input: TranslationInput): Promise<Translation> {
        const dataSet = [translationInDb] as Translation[];

        const firstItem = dataSet.find((item) => (item.source === input.source && item.destination === input.destination && item.text === input.text))

        if (firstItem) return firstItem;

        return null as any as Translation;
    }

    async create(input: TranslationInput): Promise<Translation> {
        return input as Translation;
    }

    async fetchHistories(): Promise<Translation[]> {
        return [];
    }
}

describe('TranslationService', () => {
    const mockRepo = new MockTranslateRepository();
    const mockGoogleService = new MockGoogleService();
    let service = new TranslationService(mockRepo, mockGoogleService);

    it('should return correct value if it have in database', async () => {
        const translation = await service.translate(pick(translationInDb, ['source', 'destination', 'text']));

        expect(translation).toEqual(translationInDb);
    });

    it('should return correct value if it does not exist in db and google return data', async () => {
        const translation = await service.translate(pick(translationByGoogle, ['source', 'destination', 'text']));

        expect(translation).toEqual(translationByGoogle);
    });

    it('should throw error if google could not translate', async () => {
        await expect(service.translate({ 
            source: 'from', 
            destination: 'auto', 
            text: 'text' 
        })).rejects.toThrow(
            Error,
        );
    });
});
