//testin an wallet algorithm

const wallet = 'bc1qk6ttldeppe9ntwt29sm04p6s5aa69j6a7hr873';
let moeda = ["BTC", "BRL"];
let saldoWallet = 0;

function imprime(dados) {
	console.log("\n" + dados);
}

function getSaldo(enderecoCarteira) {
	console.log("\nAnalisando saldo da wallet: " + enderecoCarteira);
	saldoWallet = saldoWallet + 7.5432177;
	saldoWallet = saldoWallet.toFixed(8);

	return saldoWallet;
}

function main() {
	let saldo = getSaldo(wallet);
	imprime(saldo)
}

main();
