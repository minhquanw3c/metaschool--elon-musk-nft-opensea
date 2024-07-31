const { ethers } = require("hardhat");

async function main() {
	const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
	// const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
	// const accounts = await provider.listAccounts();

	// console.log(accounts);

	const Lock = await ethers.getContractFactory('Lock');
	const lock = Lock.attach(CONTRACT_ADDRESS);

	const withdrawTx = await lock.withdraw();
	await withdrawTx.wait();

	const getBalanceTx = await lock.getWithdrawActivities("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
	await getBalanceTx.wait();

	console.log("Balance is ", getBalanceTx.toString());
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
