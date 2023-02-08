// This script will increment and decrement the value of the contract
// and print the value before and after each operation.
//

const hre = require("hardhat");

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

async function main() {
    // Todo: 
    // 1. Get the contract address from the command line
    // 2. Get the contract instance from the address
    // 3. Call incrementValue and decrementValue
    // 4. Reset the status of the contract to the initial value

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
