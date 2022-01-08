require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const alchemyApiKey = process.env.ALCHEMY_API_KEY || "test123";
const walletPrivateKey = process.env.WALLET_PRIVATE_KEY || "asddsa123";

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${alchemyApiKey}`,
      accounts: [`${walletPrivateKey}`],
    },
    bscTestnet: {
      url: `https://data-seed-prebsc-1-s1.binance.org:8545`,
      accounts: [`${walletPrivateKey}`],
    },
    mumbai: {
      url: "https://rpc-mumbai.matic.today",
      accounts: [`${walletPrivateKey}`],
    },
  },
  solidity: "0.8.4",
};
