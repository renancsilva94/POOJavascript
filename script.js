class ContaBancaria {
  constructor(agencia, numero, tipo){
      this.agencia = agencia; 
      this.numero = numero;
      this.tipo = tipo;
      this.saldo = 0;
  }

  get saldo(){
    return this._saldo;
  }

  set saldo(valor){
    this._saldo = valor;
  }
  sacar(valor){
   if (valor > this._saldo){
      return 'Operação negada';
   }
        this._saldo = this._saldo - valor;
          return this._saldo;
  }

  depositar (valor) { 
    this._saldo =  this._saldo + valor;
      return this._saldo;
  }
}



class ContaCorrente extends ContaBancaria { //classe filha de conta bancaria
  constructor(agencia, numero){
    super(agencia, numero); //tudo que receber vai para o construtor;
    this.tipo = 'corrente';
    this.cartaoCredito = cartaoCredito;
  } 

  get cartaoCredito(){
    return this._cartaoCredito;
  }

  set cartaoCredito(valor){
     this._cartaoCredito = valor; 
  }
}



class ContaPoupança extends ContaBancaria {    //classe filha
  constructor(agencia, numero){
    super(agencia, numero); //tudo que receber vai para o construtor;
    this.tipo = 'poupança';
  }
}



class ContaUniversitaria extends ContaBancaria {
  constructor(agencia, numero){
    super(agencia, numero); //tudo que receber vai para o construtor;
    this.tipo = 'universitaria';
  }

  sacar(valor){
    if (valor > 500){
      return 'Operação negada';
    }
    this._saldo = this._saldo - valor;
    return this._saldo;
  }
}


