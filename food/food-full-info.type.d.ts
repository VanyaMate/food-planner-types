import { DomainFood } from './food.type';
import { DomainFoodNutritional } from './food-nutritional-value.type';
import { DomainFoodVitamins } from './food-vitamins.type';
import { DomainFoodMinerals } from './food-minerals.type';
export type DomainFoodFull = DomainFood & {
    description: string;
    nutritional: DomainFoodNutritional;
    vitamins: DomainFoodVitamins;
    minerals: DomainFoodMinerals;
};
export declare const isDomainFoodFull: import("superstruct").Struct<{
    description: string;
    title: string;
    id: string;
    image: string;
    nutritional: {
        calorie: number;
        proteins: number;
        fats: number;
        carbohydrates: number;
    };
    vitamins: {
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
    };
    minerals: {
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
    };
}, {
    description: import("superstruct").Struct<string, null>;
    nutritional: import("superstruct").Struct<{
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
    vitamins: import("superstruct").Struct<{
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
    }, {
        a: import("superstruct").Struct<number, null>;
        b1: import("superstruct").Struct<number, null>;
        b2: import("superstruct").Struct<number, null>;
        b3: import("superstruct").Struct<number, null>;
        b5: import("superstruct").Struct<number, null>;
        b6: import("superstruct").Struct<number, null>;
        b7: import("superstruct").Struct<number, null>;
        b9: import("superstruct").Struct<number, null>;
        b12: import("superstruct").Struct<number, null>;
        c: import("superstruct").Struct<number, null>;
        d: import("superstruct").Struct<number, null>;
        e: import("superstruct").Struct<number, null>;
        k: import("superstruct").Struct<number, null>;
    }>;
    minerals: import("superstruct").Struct<{
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
    }, {
        iron: import("superstruct").Struct<number, null>;
        calcium: import("superstruct").Struct<number, null>;
        magnesium: import("superstruct").Struct<number, null>;
        phosphorus: import("superstruct").Struct<number, null>;
        potassium: import("superstruct").Struct<number, null>;
        sodium: import("superstruct").Struct<number, null>;
        zinc: import("superstruct").Struct<number, null>;
        copper: import("superstruct").Struct<number, null>;
        manganese: import("superstruct").Struct<number, null>;
        selenium: import("superstruct").Struct<number, null>;
    }>;
    title: import("superstruct").Struct<string, null>;
    id: import("superstruct").Struct<string, null>;
    image: import("superstruct").Struct<string, null>;
}>;
