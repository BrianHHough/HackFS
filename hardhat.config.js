require("@nomiclabs/hardhat-waffle");

require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.10",
  networks: {
    mumbai: {
      url: "https://rpc.ankr.com/polygon_mumbai",
      accounts: [`0x${process.env.WALLET_SEED}`],
    }
  }
};