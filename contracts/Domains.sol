// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.10;

import "hardhat/console.sol";

contract ScoopsDomains {
    mapping(string => address) public domains; // Mapping for owner's name::address

    mapping(string => string) public records; // Mapping for storing values

    // Constructor to initiate contract
    constructor() {
        console.log("GM...THIS IS MY DOMAINS CONTRACT! WAGMI");
    }

    // Let owner add name to mapping
    function registerDomainToOwner(string calldata name) public {
        require(domains[name] == address(0)); // Require: ensure name not registered yet
        domains[name] = msg.sender; // Link domain name w/ the minter (message.sender)
        console.log("%s has minted a scoops domain!", msg.sender);
    }

    // Return domain owner's wallet address
    function getOwnerAddress(string calldata name) public view returns (address) {
        return domains[name]; // Confirm owner is the domain txn sender
    }

    // Verify and set the owner to their domain
    function setRecordOfDomain(string calldata name, string calldata record) public {
        require(domains[name] == msg.sender); // Require: confirm domain owner is txn sender
        records[name] = record;
    }

    // Get the domain's record
    function getRecordOfDomain(string calldata name) public view returns(string memory) {
        return records[name]; // Retrieve domain's record by name
    }
}

