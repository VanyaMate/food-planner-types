import { number, object } from 'superstruct';


export type DomainFoodVitamins = {
    a: number;
    b1: number;
    b2: number;
    b3: number;
    b5: number;
    b6: number;
    b7: number;
    b9: number;
    b12: number;
    c: number;
    d: number;
    e: number;
    k: number;
}

export const isDomainFoodVitamins = object({
    a  : number(),
    b1 : number(),
    b2 : number(),
    b3 : number(),
    b5 : number(),
    b6 : number(),
    b7 : number(),
    b9 : number(),
    b12: number(),
    c  : number(),
    d  : number(),
    e  : number(),
    k  : number(),
});