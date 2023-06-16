// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BoobaToken is ERC20, Ownable {
    uint256 public PRICE_IN_WEI = 0.1 ether;

    constructor() ERC20("BoobaToken", "B2O") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }

    function mint(address to) public payable {
        require(msg.value >= PRICE_IN_WEI, "Not enough ether");
        _mint(to, 1 ether);
    }
}
