require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const TESTNET_API_URL_KEY = process.env.TESTNET_ALCHEMY_HTTP_URL;
const MAINNET_API_URL_KEY = process.env.MAINNET_ALCHEMY_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	solidity: "0.8.20",
	networks: {
		polygon_amony: {
			url: TESTNET_API_URL_KEY,
			accounts: [PRIVATE_KEY],
		},
		matic: {
			url: MAINNET_API_URL_KEY,
			accounts: [PRIVATE_KEY],
		},
	},
};
