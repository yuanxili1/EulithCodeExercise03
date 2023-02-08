// Use ethers.js to check if the state of 
// the contract is back to the initial value
//

const ethers = require("ethers");

async function main() {
    const contractAbi = [
        "function incrementValue()",
        "function decrementValue()",
        "function getValue() view returns (uint256)",
    ];
    
    const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
    const provider = new ethers.providers.JsonRpcProvider();
    
    const contract = new ethers.Contract(contractAddress, contractAbi, provider);
    const value = await contract.getValue();
    console.log("Value after reset:", value.toNumber());
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});