// This script will reset the hardhat node and re-deploy the contract
//

const hre = require("hardhat");
const ethers = require("ethers");

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
    // Record the current timestamp
    var formattedTime = await getCurrentTime();
    
    // We retrieve the contract
    const contractAbi = [
        "function incrementValue()",
        "function decrementValue()",
        "function getValue() view returns (uint256)",
    ];
    const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
    const provider = new ethers.providers.JsonRpcProvider();

    contract = new ethers.Contract(contractAddress, contractAbi, provider);
    
    // Print the contract address
    console.log(
        `[Retrive] Contract retrieved at ${contract.address} at ${formattedTime}`
    );

    // Reset the status of the node
    formattedTime = await getCurrentTime();
    await hre.network.provider.send("hardhat_reset")
    console.log("[Reset] Hardhat node reset at", formattedTime);

    // ******************************************************
    // *** This is not necessary if you want to clear out ***
    // ***     all previously deployed contracts          ***
    // ******************************************************
    // Re-deploy the contract
    // This will reset the value of the contract to the initial value
    formattedTime = await getCurrentTime();
    const initialValue = 256;
    const Contract = await hre.ethers.getContractFactory("mutateInterger");
    contract = await Contract.deploy(initialValue);
    await contract.deployed();
    console.log(
        `[Deploy] Contract deployed to ${contract.address} at ${formattedTime}`
    );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
