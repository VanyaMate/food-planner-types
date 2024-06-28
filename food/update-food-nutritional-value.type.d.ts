import { DomainFoodNutritional } from './food-nutritional-value.type';
export type DomainFoodNutritionalValueUpdateData = Partial<DomainFoodNutritional>;
export declare const isDomainFoodNutritionalValueUpdateData: import("superstruct").Struct<{
    calorie: number;
    proteins: number;
    fats: number;
    carbohydrates: number;
}, import("superstruct/dist/utils").PartialObjectSchema<{
    calorie: import("superstruct").Struct<number, null>;
    proteins: import("superstruct").Struct<number, null>;
    fats: import("superstruct").Struct<number, null>;
    carbohydrates: import("superstruct").Struct<number, null>;
}>>;
