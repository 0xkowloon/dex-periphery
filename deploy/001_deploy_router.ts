import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployments, getNamedAccounts} = hre;

  const {deploy} = deployments;
  const {deployer, FACTORY, WETH} = await getNamedAccounts();

  await deploy('UniswapV2Router02', {
    from: deployer,
    args: [FACTORY, WETH],
    log: true,
  });
};
func.tags = ['main', 'local', 'seed'];

export default func;