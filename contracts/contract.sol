// SPDX-License-Identifier: MIT
//
// Solidity Contract to be deployed on the local blockchain
//

pragma solidity ^0.8.17;

// This is a simple contract that will allow you to 
// increment, decrement, set, and get an integer
contract mutateInterger{
    uint256 public _integer = 0;
    
    function increment() public {
        _integer++;
    }
    
    function decrement() public {
        _integer--;
    }

    function setInteger(uint256 _newInteger) public {
        _integer = _newInteger;
    }
    
    function getInteger() public view returns (uint256){
        return _integer;
    }
}