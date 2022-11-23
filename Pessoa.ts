
export  abstract class Pessoa {
    constructor(
        protected _nome: string,
        protected _inteligencia: number,
        protected _energiaAtual: number,
        protected _energiaMaxima: number
      ) {}
      
  public abstract estudar(): void;

  public abstract procrastinar(): void;



  public set energiaAtual(energiaAtual: number) {
    this._energiaAtual = energiaAtual;
  }
 

}
