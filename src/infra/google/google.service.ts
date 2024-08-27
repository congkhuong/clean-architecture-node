import translate from '@iamtraction/google-translate';
import { Service } from "typedi";
import { IGoogleService } from "./interface.google.service";
import { Translation } from "../../models/Translation";

@Service()
export class GoogleService implements IGoogleService {
    async translate(from: string, to: string, text: string): Promise<string> {
        try {
            const result = await translate(text, { from, to });

            return result.text;

        } catch (error) {
            throw error;
        }
    }
}
