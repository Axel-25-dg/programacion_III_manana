export class Personal {
    public nombre: string;
    public cargo: string;

    constructor(
        nombre: string,
        cargo: string
    ) {
        this.nombre = nombre;
        this.cargo = cargo;
    }

    trabajar(): void {
        console.log('personal en actividad');
    }
}

export class Administrativo extends Personal { }