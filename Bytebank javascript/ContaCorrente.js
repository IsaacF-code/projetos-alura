export class ContaCorrente {
    agencia;
    // #saldo = 0 - # torna o atributo privado - https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0; // _ torna o atributo privado, porém não faz com que seja realmente privado

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0){
            return;
        } // early return - https://www.lucaspaganini.com/pt/academy/early-returns-code-patterns-in-javascript#early-exits
        this._saldo += valor;
    }
}