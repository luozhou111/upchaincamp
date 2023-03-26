require("@nomicfoundation/hardhat-toolbox");
let dotenv = require('dotenv')
dotenv.config({ path: "./.env" })
const privateKey = process.env.PRIVATE_KEY
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    development: {
      url: "http://127.0.0.1:8545",
    },
    polygon: {
      url: "https://matic-mumbai.chainstacklabs.com",
      chainId: 80001,
      accounts: [privateKey]
    }
  },
  etherscan: {
    apiKey: {
      polygonMumbai: process.env.POLYGON_APIKEY,
      // bsc : process.env.BSC_APIKEY
    }
  },
};
