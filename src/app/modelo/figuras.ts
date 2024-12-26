export abstract class FiguraGeometrica {
  constructor(public nombre: string) {}
  abstract calcularPerimetro(): number;
}

// Clase para representar un círculo
export class Circulo extends FiguraGeometrica {
  constructor(public radio: number) {
    super('Círculo'); // Llama al constructor de FiguraGeometrica
  }

  calcularPerimetro(): number {
    return 2 * Math.PI * this.radio; // Fórmula del perímetro del círculo
  }
}

// Clase para representar un triángulo escaleno
export class TrianguloEscaleno extends FiguraGeometrica {
  constructor(public ladoA: number, public ladoB: number, public ladoC: number) {
    super('Triángulo Escaleno'); // Llama al constructor de FiguraGeometrica
  }

  calcularPerimetro(): number {
    return this.ladoA + this.ladoB + this.ladoC; // Suma de los lados
  }
}

// Clase para representar un triángulo equilátero
export class TrianguloEquilatero extends FiguraGeometrica {
  constructor(public lado: number) {
    super('Triángulo Equilátero'); // Llama al constructor de FiguraGeometrica
  }

  calcularPerimetro(): number {
    return this.lado * 3; // Fórmula del perímetro de un triángulo equilátero
  }
}
