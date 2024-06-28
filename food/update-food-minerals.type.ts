import { DomainFoodMinerals, isDomainFoodMinerals } from './food-minerals.type';
import { partial } from 'superstruct';


export type DomainFoodMineralsUpdateData = Partial<DomainFoodMinerals>;

export const isDomainFoodMineralsUpdateData = partial(isDomainFoodMinerals);