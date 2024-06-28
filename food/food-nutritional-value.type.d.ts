export type DomainFoodNutritional = {
    calorie: number;
    proteins: number;
    fats: number;
    carbohydrates: number;
};
export declare const isDomainFoodNutritional: import("superstruct").Struct<{
    calorie: number;
    proteins: number;
    fats: number;
    carbohydrates: number;
}, {
    calorie: import("superstruct").Struct<number, null>;
    proteins: import("superstruct").Struct<number, null>;
    fats: import("superstruct").Struct<number, null>;
    carbohydrates: import("superstruct").Struct<number, null>;
}>;
