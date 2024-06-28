export type DomainFood = {
    id: string;
    title: string;
    image: string;
};
export declare const isDomainFood: import('superstruct').Struct<{
    title: string;
    id: string;
    image: string;
}, {
    id: import('superstruct').Struct<string, null>;
    title: import('superstruct').Struct<string, null>;
    image: import('superstruct').Struct<string, null>;
}>;
