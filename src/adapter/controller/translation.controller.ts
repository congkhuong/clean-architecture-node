import { Inject, Service } from "typedi";
import { Request, Response } from "express";
import { TranslationService } from "../../module/translation/services/translation.service";
import { Translation } from "@/model/Translation";

@Service()
export default class TranslationController {
    constructor(
        @Inject(() => TranslationService) public translationService: TranslationService,
    ) {
    }

    translate = async (request: Request, response: Response): Promise<Translation | any> => {
        const translation = await this.translationService.translate(request.query as any);
        
        return response.json(translation);
    };
}
