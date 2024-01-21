import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
//import { Contract } from "ethers";

/**
 * Deploys a contract named "YourContract" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployYourContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /*
    On localhost, the deployer account is the one that comes with Hardhat, which is already funded.

    When deploying to live networks (e.g `yarn deploy --network goerli`), the deployer account
    should have sufficient balance to pay for the gas fees for contract creation.

    You can generate a random account with `yarn generate` which will fill DEPLOYER_PRIVATE_KEY
    with a random private key in the .env file (then used on hardhat.config.ts)
    You can run the `yarn account` command to check your balance in every network.
  */
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  //address ghoToken, address ghoTreasury, uint256 fee, address addressesProvider

  await deploy("GhoFlashMinter", {
    from: deployer,
    gasLimit: 6000000, // Set a value based on your network and transaction complexity
    // Contract constructor arguments
    args: [
      "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
      "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",
      1,
      "0x90F79bf6EB2c4f870365E785982E1f101E93b906",
    ],
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
  });

  // Get the deployed contract to interact with it after deploying.
  // const ghoFlashMinter = await hre.ethers.getContract<Contract>("GhoFlashMinter", deployer);
  //console.log("👋 Initial greeting:", await ghoFlashMinter.greeting());
};

export default deployYourContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployYourContract.tags = ["YourContract"];
