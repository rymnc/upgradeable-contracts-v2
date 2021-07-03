import { task, HardhatUserConfig } from "hardhat/config"
import "@nomiclabs/hardhat-waffle"
import "hardhat-deploy"
import "@typechain/hardhat"
import "@nomiclabs/hardhat-ethers"
import "@nomiclabs/hardhat-waffle"


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (args, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const config: HardhatUserConfig = {
  solidity: "0.8.0",
  typechain: {
    outDir: "types",
    target: "ethers-v5",
    alwaysGenerateOverloads: false, // should overloads with full signatures like deposit(uint256) be generated always, even if there are no overloads?
  },
  namedAccounts: {
    manager: {
      default: 0
    },
    aux: {
      default: 1,
    },
    deviceOne: {
      default: 2
    }
  }
}
export default config;