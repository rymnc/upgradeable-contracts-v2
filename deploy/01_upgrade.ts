import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers} from "hardhat"

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {
    deployments: {deploy},
    getNamedAccounts,
  } = hre;

  const { manager } = await getNamedAccounts();

  await deploy("Upgrade", {
    from: manager,
    proxy: {
      proxyContract: "OpenZeppelinTransparentProxy",
      owner: manager,
      execute: {
        methodName: 'initialize',
        args: [manager, 0, 0, ethers.utils.formatBytes32String("test_device")],
      }
    },
    log: true,
  })


};

export default func;
func.tags = ["Upgrade"];
