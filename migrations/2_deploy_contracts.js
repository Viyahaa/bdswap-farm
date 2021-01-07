const BDSwapFarm = artifacts.require('BDSwapFarm.sol');
const BDSwapToken = artifacts.require('BDSwapToken.sol');

const devaddr = "0x4cf0a877e906dead748a41ae7da8c220e4247d9e".toLowerCase();
const owner = "0x4cf0a877e906dead748a41ae7da8c220e4247d9e".toLowerCase();
const waspPerBlock = "3000000000000000000"; // 12000000000000000000 wasp/block
const startBlock = 1039000;
const testEndBlock = startBlock + 28800; // startBlock + 1.week
const bonusEndBlock = testEndBlock + 172800; // startBlock + 1.week + 2.month
const allEndBlock = bonusEndBlock + 806400; // startBlock + 2.year

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(BDSwapToken);
  console.log('BDSwapToken.address', BDSwapToken.address);
  await deployer.deploy(BDSwapFarm,
    BDSwapToken.address,
    devaddr,
    waspPerBlock,
    startBlock,
    testEndBlock,
    bonusEndBlock,
    allEndBlock
  );
  console.log('BDSwapFarm.address', BDSwapFarm.address);

  // let wasp = await WaspToken.deployed();
  // let farm = await WanSwapFarm.deployed();
  let receipt = await wasp.transferOwnership(farm.address);
  // console.log("wasp owner", (await wasp.owner()))

  // if (owner !== accounts[0].toLowerCase()) {
  //   receipt = await farm.transferOwnership(owner);
  // }
  // console.log("farm owner", (await farm.owner()))
};
