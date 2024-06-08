export type Route = {
    id: number,
    name: string,
    route: ROUTE
}


export enum ROUTE {
    GLOBAL = 'global',
    KONSTRUCTOR = 'konstructor',
    COMPLECT = 'complect',
    PRODUCTS = 'products',
    TEMPLATE = 'template',
    DOCUMENT = 'document',
    REPORT = 'report',
    CALLING = 'calling',
    TRANSKRIBATION = 'transcribation',
    FINISH = 'finish',
}