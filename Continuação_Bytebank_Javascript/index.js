import { Cliente } from "./Cliente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const cliente1 = new Cliente("Isaac", 11122233309);

const diretor = new Diretor("Isaac", 10000, 12345678900);
diretor.cadastrarSenha("123");

const gerente = new Gerente("Freires", 5000, 12345678901);
gerente.cadastrarSenha("321");

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "321");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123");

const clienteEstaLogado = SistemaAutenticacao.login(cliente1, "456");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);
