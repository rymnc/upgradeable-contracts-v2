import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers} from "hardhat"

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {
      deployments: {deploy},
      getNamedAccounts
  } = hre;
  const { manager } = await getNamedAccounts()

  await deploy("Upgrade", {
    from: manager,
    contract: 'UpgradeV3',
    proxy: {
      proxyContract: "OpenZeppelinTransparentProxy",
      owner: manager,
    },
    log: true,
  })


};

export default func;
func.tags = ["UpgradeV3"];
func.runAtTheEnd = true
func.dependencies= ["UpgradeV2"]
