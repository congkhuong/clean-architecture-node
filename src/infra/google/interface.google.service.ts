import { Translation } from "../../model/Translation";

export interface IGoogleService {
    translate(from: string, to: string, text: string): Promise<string>;
}
