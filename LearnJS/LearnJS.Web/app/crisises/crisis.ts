interface ICrisis {
    serialNumber: number;
    name: string;
}

export class Crisis implements ICrisis {
    public serialNumber: number;
    public name: string;

    constructor(obj?: Crisis)
    {
        if (obj)
        {
            this.serialNumber = obj.serialNumber;
            this.name = obj.name;
        }
    }
}