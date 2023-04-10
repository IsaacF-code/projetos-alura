import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0; // atributo estático, serve como uma variável global
    agencia;
    _cliente;

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    // #saldo = 0 - # torna o atributo privado - https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0; // _ torna o atributo privado, porém não faz com que seja realmente privado

    get saldo (){
        return this._saldo;
    }

    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }

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

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valor);
    }
}