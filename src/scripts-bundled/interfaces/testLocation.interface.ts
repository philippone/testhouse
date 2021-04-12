export interface TestLocation {
    uuid: number;
    name: string;
    tel?: string;
    street?: string;
    number?: number | string;
    city?: string;
    postal?: number | string;
    tag?: Array<string>
}