import { object, string } from 'superstruct';


export type DomainFood = {
    id: string;
    title: string;
    image: string;
}

export const isDomainFood = object({
    id   : string(),
    title: string(),
    image: string(),
});