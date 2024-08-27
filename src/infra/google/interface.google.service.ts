import { Translation } from "../../models/Translation";

export interface IGoogleService {
    translate(from: string, to: string, text: string): Promise<string>;
}
