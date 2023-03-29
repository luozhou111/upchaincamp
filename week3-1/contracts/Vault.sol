// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/draft-ERC20Permit.sol";

contract Bank {
    address public immutable token;
    mapping (address => uint) public deposited;

      // keccak256("ERC777TokensRecipient")
    //当前方式可以在erc20授权后可以转账成功，
    //但是因为没有校验该合约时候有recieve回调，
    //导致转到该合约后，token锁死到了合约中
    constructor(address _token) {
        token = _token;
        // erc1820.setInterfaceImplementer(address(this), TOKENS_RECIPIENT_INTERFACE_HASH, address(this));
        
    }

    function deposite(address user,uint amount) public {
        IERC20(token).transferFrom(msg.sender,address(this),amount);
        deposited[user] = deposited[msg.sender] + amount;
    }

    function permitDeposit(address user,uint amount, uint deadline, uint8 v, bytes32 r, bytes32 s) external {
        IERC20Permit(token).permit(msg.sender, address(this),amount,deadline,v,r,s);
        deposite(user, amount);
    }

    function withDraw(uint amount) public{
        require(deposited[msg.sender] >= amount,'your account have less related token!');
        deposited[msg.sender] = deposited[msg.sender] - amount;
        IERC20(token).transfer(msg.sender,amount);
    }
}
