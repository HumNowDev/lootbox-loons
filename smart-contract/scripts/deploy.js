const hre = require("hardhat");

async function main() {
  const NFTMint = await hre.ethers.getContractFactory("NFTMint");
  const nft = await NFTMint.deploy();
  await nft.waitForDeployment();

  console.log("NFTMint deployed to:", await nft.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
