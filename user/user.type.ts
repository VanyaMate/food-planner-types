import { object, string, Struct } from 'superstruct';


export type DomainUser = {
    id: string;
    login: string;
    avatar: string;
}

export const isDomainUser: Struct<DomainUser> = object({
    id    : string(),
    login : string(),
    avatar: string(),
});