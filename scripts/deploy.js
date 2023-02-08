// This script deploys the integer mutation contract on the local chain
//

// Import hardhat
const hre = require("hardhat");

// Function to get the current time
async function getCurrentTime() {
    // Get formatted time
    // Will display time in 10:30:23 format
    var date = new Date(Date.now());
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    return formattedTime;
}


async function main() {
   // Get formatted time
   // Will display time in 10:30:23 format
    var formattedTime = await getCurrentTime();

   // We get the contract to deploy
    const initialValue = 256;
    const Contract = await hre.ethers.getContractFactory("mutateInterger");
    const contract = await Contract.deploy(initialValue);
    await contract.deployed();

    // Print the contract address
    console.log(
        `Contract intialized at timestamp ${formattedTime}, deployed to ${contract.address}`
    );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
