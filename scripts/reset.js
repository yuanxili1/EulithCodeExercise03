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

// TODO 1: Create a function to reset the hardhat node
// TODO 2: Create a function to deploy the contract
