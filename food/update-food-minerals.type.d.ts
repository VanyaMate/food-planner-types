import { DomainFoodMinerals } from './food-minerals.type';
export type DomainFoodMineralsUpdateData = Partial<DomainFoodMinerals>;
export declare const isDomainFoodMineralsUpdateData: import("superstruct").Struct<{
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
}, import("superstruct/dist/utils").PartialObjectSchema<{
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
}>>;
