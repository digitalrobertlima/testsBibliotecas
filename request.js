let address = "mqyTZTSKW38EtWrk4oy2DzxDcMh4DVxarp";
let endpoint = "api/v2/get_address_balance/BTCTEST/" + address;
let url = "https://chain.so/" + endpoint;

//endpoint Btc: /api/v2/get_info/BTC

function getData(url) {

	let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
	let request = new XMLHttpRequest();

	request.open('GET', url, false);
	request.send();

	let dados = JSON.parse(request.responseText);
	console.log('Saldo: ' + parseFloat(dados.data.confirmed_balance).toFixed(8));
}

function main() {
	getData(url);
}

main();

setInterval(main, 60000);
