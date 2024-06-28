import { object, string } from 'superstruct';


export type DomainFoodCreateData = {
    title: string;
}

export const isDomainFoodCreateData = object({
    title: string(),
});