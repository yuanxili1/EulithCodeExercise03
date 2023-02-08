// SPDX-License-Identifier: MIT
//
// Solidity Contract to be deployed on the Ethereum Blockchain
// This contract will be deployed on the Ropsten Testnet
//

pragma solidity ^0.8.17;

// This is a simple contract that will allow you to 
// increment, decrement, set, and get an integer
contract mutateInterger{
    uint256 public _integer = 0;
    uint256 public _originalInteger = 0;

    constructor(uint256 _initialInteger) {
        _integer = _initialInteger;
        _originalInteger = _initialInteger;
    }

    function incrementValue() public {
        _integer++;
    }
    
    function decrementValue() public {
        _integer--;
    }

    function setValue(uint256 _newInteger) public {
        _integer = _newInteger;
    }
    
    function getValue() public view returns (uint256){
        return _integer;
    }

    function resetValue() public {
        _integer = _originalInteger;
    }
}