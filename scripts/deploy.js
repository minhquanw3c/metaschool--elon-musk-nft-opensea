const hre = require("hardhat");

async function main() {
	const deployNFTContract = await hre.ethers.deployContract("ElonNFT");
	const elon = await deployNFTContract.waitForDeployment();

	console.log("Elon contract address is:", await elon.getAddress());
	console.log("Minting NFT...");

	let txn = await elon.mintNFT();
	await txn.wait();

	console.log("Yaay... NFT minted successfully!!!");
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
