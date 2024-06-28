import { partial } from 'superstruct';
import { DomainFoodVitamins, isDomainFoodVitamins } from './food-vitamins.type';


export type DomainFoodVitaminsUpdateData = Partial<DomainFoodVitamins>;

export const isDomainFoodVitaminsUpdateData = partial(isDomainFoodVitamins);