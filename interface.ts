export interface AnInterface {
    aRequiredField: string;
    aRequiredMethod(): void;
    anOptionalField?: number;
}

export type AType = {
    aRequiredField: string,
    aRequiredMethod: () => void,
    anOptionalField?: number,
}

export class AClass implements AType {
    aRequiredField: string;
    aRequiredMethod: () => void;
    anOptionalField?: number | undefined;

}