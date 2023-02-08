## Introduction
This repository contains the code for the third code exercise for the Eulith back-end engineers. 

It contains three parts:
1. A solidity contract that performs simple integer mutation on-chain.
2. A client that allows the user to deploy the previous contract to a local chain, monitor the results of the action, and reset the contract to a neutral state.
3. Asynchronously monitors the contract in a non-blocking loop.

## Get Started
### 0. Installation

```
git clone https://github.com/yuanxili1/EulithCodeExercise03.git
cd EulithCodeExercise03
```

### 1.1 Compile the contract (Step 1)

```shell
npm install
npx hardhat compile
```

### 1.2 Open a local chain 
```shell
npx hardhat node
```

### 2. Create a CLI for Deployment  (Step 2)
1. Deploy the contract TO A LOCAL CHAIN (again, not real ETH).
2. Monitor the results of the action from console
3. Reset the contract to a neutral state (the state before the action)
```shell
npx hardhat run --network localhost scripts/deploy.js
npx hardhat run --network localhost scripts/mutate.js
npx hardhat run --network localhost scripts/reset.js
```

### 2.5. Send a query to the contract (Step 2.5)
```shell
node ./scripts/query.js
```

### 3. Asynchronously monitor the contract in a non-blocking loop (Step 3)

#### 3.1 Install Rust
```shell
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
cargo install mini-redis
mini-redis-server
```

#### 3.2 Run monitor scripts
Open another terminal and run:
```shell
cd ./monitor
cargo run
```

Open another terminal and run this command four times,
you could see the monitor script detected the mutation and shut down the program.
```shell
npx hardhat run --network localhost scripts/mutate.js
```