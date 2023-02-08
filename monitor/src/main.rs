// Write a Rust program that asynchronously monitors the contract in a non-blocking loop. 
// 1. The main thread of your program should deploy and set up the contract. 
// 2. Spawn a parallel thread to monitor for a certain condition. 
// 3. Back in the main thread, take an action to satisfy the condition. 
// 4. Then acknowledge to the user that the condition was met, reset the contract state, and shut down the program.

use web3::types::Address;
use web3::contract::{Contract, Options};
use web3::transports::Http;
use tokio::time::{interval, Duration};


// Example function to call the getValue function of the contract
async fn get_contract_state(contract : Contract<Http>) -> u128 {
    let result = contract.query("getValue", (), None, Options::default(), None).await;
    result.unwrap()
}

// Example function to call the resetValue function of the contract
async fn reset_contract_state(contract : Contract<Http>) -> u128 {
    // Reset the state of the contract
    let from_address: Address = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266".parse().unwrap();
    let _result_reset = contract.call("resetValue", (), from_address, Options::default()).await;

    // Get the new state of the contract
    let result = contract.query("getValue", (), None, Options::default(), None).await;
    result.unwrap()
}


#[tokio::main]
async fn main() {
    // Create interval to periodically check the state of the contract
    let mut interval = interval(Duration::from_secs(1));
    let transport = Http::new("http://localhost:8545").unwrap();
    let web3 = web3::Web3::new(transport);
    
    // Create contract instance
    let contract_address: Address = "0x5fbdb2315678afecb367f032d93f642f64180aa3".parse().unwrap();
    let abi: &[u8] = include_bytes!("../../contracts/abi.json");
    
    loop {
        // Create contract instance
        let contract = Contract::from_json(web3.eth(), contract_address, abi)
            .unwrap();
        
        // Wait for the next interval
        interval.tick().await;

        // Call the getMyState function of the contract and retrieve its state
        let current_state = get_contract_state(contract).await;

        // Check if the state of the contract satisfies a constraint
        let expected_state = 262;
        if current_state == expected_state {
            println!("The state of the contract satisfies the constraint");
            println!("The current value is {}", current_state);
            break;
        }
    }

    // Reset the state of the contract  
    let contract = Contract::from_json(web3.eth(), contract_address, abi)
        .unwrap();
    let last_state = reset_contract_state(contract).await;

    // Print the new state of the contract
    println!("Reset the state of the contract");
    println!("The current value is {}", last_state);
    println!("=====================================");
    println!("Exiting program");
}

