import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";


const cliente1 = new Cliente();
cliente1.nome = "Isaac";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Freires";
cliente2.cpf = 88822233309;

const contaCorrenteIsaac = new ContaCorrente();
contaCorrenteIsaac.agencia = 1001;

contaCorrenteIsaac.depositar(200);
contaCorrenteIsaac.depositar(100);

const valorSacado = contaCorrenteIsaac.sacar(50);
console.log(valorSacado);

console.log(contaCorrenteIsaac);