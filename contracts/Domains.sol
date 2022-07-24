// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.10;

import "hardhat/console.sol";

contract ScoopsDomains {
    // Mapping for owner's name::address
    mapping(string => address) public domains;

    constructor() {
        console.log("GM...THIS IS MY DOMAINS CONTRACT! WAGMI");
    }

    // Let owner add name to mapping
    function registerDomainToOwner(string calldata name) public {
        domains[name] = msg.sender;
        console.log("%s has minted a scoops domain!", msg.sender);
    }

    // Return domain owner's wallet address
    function getOwnerAddress(string calldata name) public view returns (address) {
        return domains[name];
    }
}

