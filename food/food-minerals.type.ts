import { object, number } from 'superstruct';


export type DomainFoodMinerals = {
    iron: number;
    calcium: number;
    magnesium: number;
    phosphorus: number;
    potassium: number;
    sodium: number;
    zinc: number;
    copper: number;
    manganese: number;
    selenium: number;
}

export const isDomainFoodMinerals = object({
    iron      : number(),
    calcium   : number(),
    magnesium : number(),
    phosphorus: number(),
    potassium : number(),
    sodium    : number(),
    zinc      : number(),
    copper    : number(),
    manganese : number(),
    selenium  : number(),
});