import { Inject, Service } from "typedi";
import { Request, Response } from "express";
import { TranslationService } from "../services/translation.service";
import { Translation } from "@/models/Translation";

@Service()
export default class TranslationController {

    constructor(
        @Inject(() => TranslationService) public translationService: TranslationService,
    ) {
        // TranslationCo
    }

    translate = async (request: Request, response: Response): Promise<Translation | any> => {
        const translation = await this.translationService.translate(request.query as any);
        
        return response.json(translation);
    };
}
