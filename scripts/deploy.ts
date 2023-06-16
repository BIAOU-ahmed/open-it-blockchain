import { ethers } from "hardhat";

async function main() {
  const AhmedNFT = await ethers.getContractFactory("AhmedNFT");
  const contractInstance = await AhmedNFT.deploy();

  await contractInstance.deployed();

  console.log(`AhmedNFT deployed to ${contractInstance.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
