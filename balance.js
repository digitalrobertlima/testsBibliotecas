import fetch from 'node-fetch';
let btcAddress = "tb1qxhkeace2z28r69dfdm3d7a7xvf7dvnn0gs7tlj";
let url = "https://blockchain.info/q/addressbalance/";

function main() {
fetch(url + btcAddress)
.then(function(response) {
	return response.json();
})
.then(function(json) {
	let balance = parseFloat(json, 10);
	let btcBalance = balance / 100000000;
	console.log(btcAddress);
	console.log(btcBalance);
})
}

main();
