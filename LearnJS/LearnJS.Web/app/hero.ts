﻿export interface Hero {
    id: number;
    name: string;
    power: string;
    alterEgo?: string;
}

export class HeroClass implements Hero {
    constructor(public id: number, public name: string, public power: string, public alterEgo: string)
    {
    }
}
