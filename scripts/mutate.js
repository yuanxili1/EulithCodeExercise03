// This script will increment and decrement the value of the contract
// and print the value before and after each operation.
//

const hre = require("hardhat");
const ethers = require("ethers");

// This function will increment the value of the contract
async function incrementValue(contract) {
    // Get the current value of the contract
    const value = await contract.getValue();
    console.log("Value before increment:", value.toNumber());
    
    // Increment the value of the contract
    await contract.incrementValue();

    // Get the new value of the contract
    const newValue = await contract.getValue();
    console.log("Value after  increment:", newValue.toNumber());
}

// This function will decrement the value of the contract
async function decrementValue(contract) {
    // Get the current value of the contract
    const value = await contract.getValue();
    console.log("Value before decrement:", value.toNumber());
    
    // Decrement the value of the contract
    await contract.decrementValue();

    // Get the new value of the contract
    const newValue = await contract.getValue();
    console.log("Value after  decrement:", newValue.toNumber());
}

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

    // We retrieve the contract
    const contractAbi = [
        "function incrementValue()",
        "function decrementValue()",
        "function getValue() view returns (uint256)",
    ];
    const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
    const provider = new ethers.providers.JsonRpcProvider();
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractAbi, signer);
    // const contract = new ethers.Contract(contractAddress, contractAbi, provider);
    
    // Print the contract address
    console.log(
        `Contract intialized at timestamp ${formattedTime}, deployed to ${contract.address}`
    );

    // Increment and decrement the value of the contract
    await incrementValue(contract);
    console.log("===============");
    await incrementValue(contract);
    console.log("===============");
    await decrementValue(contract);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
