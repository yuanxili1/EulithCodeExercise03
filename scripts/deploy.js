// This script deploys the integer mutation contract on the local chain
//

// Import hardhat
const hre = require("hardhat");

async function main() {
    // Record the current timestamp
    const currentTimestampInSeconds = Math.round(Date.now() / 1000);

    // We get the contract to deploy
    const initialValue = 256;
    const Contract = await hre.ethers.getContractFactory("mutateInterger");
    const contract = await Contract.deploy(initialValue);
    await contract.deployed();

    console.log(
        `Contract intialized at timestamp ${currentTimestampInSeconds}, deployed to ${lock.address}`
    );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
