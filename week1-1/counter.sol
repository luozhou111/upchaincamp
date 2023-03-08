// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.4.22 <0.9.0;

contract Counter {
    uint256 count = 0;

    function addCount(uint256 num) public {
        count = count + num;
    }

    function getAccount() public view 
    returns (uint256) {
        return count;
    }
}