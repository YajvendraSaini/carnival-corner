const { deploy } = require("hardhat-deploy");

async function main() {
  // Replace with your wallet address (where the organizer account will be deployed)
  const organizerAddress = "0x..."; // Replace with a valid address
  await deploy("PrizePool", [organizerAddress]);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
