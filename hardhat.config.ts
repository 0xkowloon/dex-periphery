import "dotenv/config";
import { HardhatUserConfig } from "hardhat/types";
import "hardhat-deploy";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.6.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  networks: {
    hardhat: {
      chainId: +process.env.AURORA_LOCAL_CHAINID!,
      saveDeployments: false,
      forking: {
        url: "https://eth-mainnet.alchemyapi.io/v2/7p4KzWgfAW2gU_4xOoPT5mpxDdOgFycO"
      }
    },
    aurora_testnet: {
      url: process.env.AURORA_TEST_URI,
      chainId: +process.env.AURORA_TEST_CHAINID!,
      accounts: [`${process.env.AURORA_TEST_PRIVATE_KEY}`],
      timeout: 600000,
      gasPrice: 2000000000,
      gas: 8000000,
      saveDeployments: false,
    },
    aurora_mainnet: {
      url: process.env.AURORA_MAIN_URI,
      chainId: +process.env.AURORA_MAIN_CHAINID!,
      accounts: [`${process.env.AURORA_MAIN_PRIVATE_KEY}`],
      timeout: 600000,
      gasPrice: 2000000000,
      gas: 8000000,
      saveDeployments: true,
    }
  },
  namedAccounts: {
    deployer: 0,
    WETH: {
      default: '0xc9bdeed33cd01541e1eed10f90519d2c06fe3feb',
    },
    FACTORY: {
      default: '0x0000000000000000000000000000000000000000',
      // aurora_testnet: '0x0000000000000000000000000000000000000000',
      // aurora_mainnet: '0x0000000000000000000000000000000000000000',
    },
  },
};

export default config;