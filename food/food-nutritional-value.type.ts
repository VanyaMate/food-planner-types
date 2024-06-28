import { number, object } from 'superstruct';


export type DomainFoodNutritional = {
    calorie: number;
    proteins: number;
    fats: number;
    carbohydrates: number;
}

export const isDomainFoodNutritional = object({
    calorie      : number(),
    proteins     : number(),
    fats         : number(),
    carbohydrates: number(),
});