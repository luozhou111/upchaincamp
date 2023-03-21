// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Score {
    mapping (address => uint) score;
    address owner;
    error scoreInputMaxLimitError(string message);
    modifier  onlyAllowByTeacher(address teacher) {
        require(msg.sender == teacher,"only allow to Teacher");
        _;
    }

    function updateScore(address teacher,address stu,uint _score) public onlyAllowByTeacher(teacher){
        require(_score <= 100,'input score over 100 limit');
        score[stu] = _score;
    }
}

interface IScore {
    function updateScore(address teacher,address addr,uint _score) external;
}
contract Teacher {
    function updateScore(address _score, address stu, uint score) external {
        console.log(address(this));
        IScore(_score).updateScore(address(this),stu, score);
    }
}