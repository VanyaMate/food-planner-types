import { Struct } from 'superstruct';


export type DomainUser = {
    id: string;
    login: string;
    avatar: string;
};
export declare const isDomainUser: Struct<DomainUser>;
