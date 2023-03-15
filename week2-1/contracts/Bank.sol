// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Bank {
   mapping (address => uint) public transferList;
   address payable owner;

   constructor() payable {
    owner = payable (msg.sender);
   }

   receive() external payable {
    transferList[msg.sender] = msg.value;
   }

   function withDrawal() public {
    require(msg.sender == owner, 'you are not the owner');
    uint amount = address(this).balance;
    (bool success,) = owner.call{value: amount}('');
    require(success,'failed to withdrawal');
   }
}