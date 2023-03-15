require("@nomicfoundation/hardhat-toolbox");
let dotenv = require('dotenv')
dotenv.config({ path: "./.env" })
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",

  networks: {
    polygon_test: {
      url: "https://matic-mumbai.chainstacklabs.com",
      chainId: 80001,
      accounts: [process.env.privateKey]
    },
  },

  etherscan: {
    apiKey: {
      polygonMumbai: process.env.POLYGON_APIKEY,
      // bsc : process.env.BSC_APIKEY
    }
  },
};
