// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC777/ERC777.sol";

contract MyERC777 is ERC777 {
    constructor() ERC777("MY777", "M777", new address[](0)) payable {
        _mint(payable(msg.sender),10000*10**18,"","");
    }
}