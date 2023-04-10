import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";


const cliente1 = new Cliente("Isaac", 11122233309); // instanciando um objeto da classe Cliente
const cliente2 = new Cliente("Freires", 88822233309);

const contaCorrenteIsaac = new ContaCorrente(1001, cliente1);

contaCorrenteIsaac.depositar(200);

const conta2 = new ContaCorrente(102, cliente2);

let valor = 50;
contaCorrenteIsaac.transferir(valor, conta2);

console.log("Cliente 1:");
console.log(cliente1);

console.log(".......................");

console.log("Conta Corrente do Cliente 1:");
console.log(contaCorrenteIsaac);

console.log(".......................");

console.log("Número de Contas: " + ContaCorrente.numeroDeContas);