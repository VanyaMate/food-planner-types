import { partial } from 'superstruct';
import {
    DomainFoodNutritional,
    isDomainFoodNutritional,
} from './food-nutritional-value.type';


export type DomainFoodNutritionalValueUpdateData = Partial<DomainFoodNutritional>;

export const isDomainFoodNutritionalValueUpdateData = partial(isDomainFoodNutritional);