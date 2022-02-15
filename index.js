import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Michael", 11122233309);
const cliente2 = new Cliente("Alice", 88877766609);

const contaCorrenteMichael = new ContaCorrente(1001, cliente1);
contaCorrenteMichael.depositar(500);
const conta2 = new ContaCorrente(102, cliente2);

let valor = 200;
contaCorrenteMichael.transferir(valor, conta2);

console.log(ContaCorrente.numeroDeContas);







