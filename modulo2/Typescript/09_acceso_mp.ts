export class Empleado {
    public nombre: string;
    private fechaIngreso: any;
    protected idRRHH: string = 'RH-20231122';

    constructor(
        nombre: string
    ) {
        this.nombre = nombre;
        this.generarFechaIngreso();
    }

    generarFechaIngreso(): void {
        this.fechaIngreso = (new Date()).toDateString();
    }

    getFechaIngreso(): any {
        return this.fechaIngreso;
    }

    getAtributes(): any {
        return {
            nombre: this.nombre,
            fechaIngreso: this.fechaIngreso,
            id: this.idRRHH
        };
    }
}