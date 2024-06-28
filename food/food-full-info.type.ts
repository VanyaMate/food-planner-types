import { DomainFood, isDomainFood } from './food.type';
import {
    DomainFoodNutritional,
    isDomainFoodNutritional,
} from './food-nutritional-value.type';
import { DomainFoodVitamins, isDomainFoodVitamins } from './food-vitamins.type';
import { DomainFoodMinerals, isDomainFoodMinerals } from './food-minerals.type';
import { assign, object, string } from 'superstruct';


export type DomainFoodFull = DomainFood & {
    description: string;
    nutritional: DomainFoodNutritional;
    vitamins: DomainFoodVitamins;
    minerals: DomainFoodMinerals;
};

export const isDomainFoodFull = assign(isDomainFood, object({
    description: string(),
    nutritional: isDomainFoodNutritional,
    vitamins   : isDomainFoodVitamins,
    minerals   : isDomainFoodMinerals,
}));