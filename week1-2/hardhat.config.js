require("@nomicfoundation/hardhat-toolbox");
require('hardhat-abi-exporter');
require("./task/balance.js");

let dotenv = require('dotenv')
dotenv.config({ path: "./.env" })

const mnemonic = process.env.MNEMONIC
const scankey = process.env.ETHERSCAN_API_KEY
const privateKey = process.env.PRIVATE_KEY
// const privateKey = process.env.PRIVATEKEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",

  networks: {
    hardhat: {
      chainId: 31337,
      gas: 12000000,
      accounts: {
        mnemonic: mnemonic,
      },
    },

    goerli: {
      url: "https://endpoints.omniatech.io/v1/eth/goerli/public",
      accounts: [privateKey],
      chainId: 5,
    },

    polygon_test: {
      url: "https://matic-mumbai.chainstacklabs.com",
      chainId: 80001,
      accounts: [privateKey]
    },

  },


  abiExporter: {
      path: './deployments/abi',
      clear: true,
      flat: true,
      only: [],
      spacing: 2,
      pretty: true,
  },

  etherscan: {
    apiKey: {
      polygonMumbai: process.env.POLYGON_APIKEY,
      // bsc : process.env.BSC_APIKEY
    }
  },

};
