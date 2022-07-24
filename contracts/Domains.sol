// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol"; // OpenZeppelin NFT contract w/ storage
import "@openzeppelin/contracts/utils/Counters.sol"; // OpenZeppelin counters utility

import { StringUtils } from "./libraries/StringUtils.sol"; // String utility
import { Base64 } from "./libraries/Base64.sol"; // Convert to SVG
import "hardhat/console.sol";

contract ScoopsDomains is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    string public scoopdomain; // Create domain `scoopdomain`

    // Create a ~lit~ background w/ text inputed from contract as SVG
    string svgPartOne = '<svg xmlns="http://www.w3.org/2000/svg" width="270" height="270" fill="none"><path fill="url(#a)" d="M0 0h270v270H0z"/><defs><filter id="d" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="270" width="270"><feDropShadow dx="0" dy="1" stdDeviation="2" flood-opacity=".225" width="200%" height="200%"/></filter></defs><svg width="98" height="157" viewBox="0 0 98 137" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="url(#b)" d="M0 0h98v137H0z"/><defs><pattern id="b" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#c" transform="matrix(.00309 0 0 .0022 -.053 -.001)"/></pattern><image id="c" width="400" height="400" xlink:href="https://gateway.pinata.cloud/ipfs/QmXtJEywkNq8y2ymMgYypwX96E9iJB4RV9RhcNvHV84xFc"/></defs></svg><defs><linearGradient id="a" x1="0" y1="0" x2="270" y2="270" gradientUnits="userSpaceOnUse"><stop stop-color="#FBB336"/><stop offset="1" stop-color="#FA0955" stop-opacity=".99"/></linearGradient></defs><text x="32.5" y="231" font-size="27" fill="#fff" filter="url(#d)" font-family="Plus Jakarta Sans,DejaVu Sans,Noto Color Emoji,Apple Color Emoji,sans-serif">';

    // Round out the svg and end it after putting in the text between svgPartOne and svgPart two
    string svgPartTwo = '</text></svg>';

    mapping(string => address) public domains; // Mapping for owner's name::address
    mapping(string => string) public records; // Mapping for storing values

    // Constructor to initiate contract
    constructor(string memory _scoopdomain) payable ERC721("Scoops Domains on Polygon", "SDP") { // Contract is payable via constructor
        scoopdomain = _scoopdomain; // Set values equal to themselves for domain resolver
        console.log("%s Scoops Domain deployed,", _scoopdomain);
    }

    // Get the price of a domain using length of the string
    function priceOfDomain(string calldata name) public pure returns(uint) {
        uint lengthOfDomain = StringUtils.stringLength(name);
        require(lengthOfDomain > 0);
        if (lengthOfDomain == 3) { // 1 MATIC = 1 000 000 000 000 000 000 GWEI (18 decimal points)
            return 5 * 10**16; // 0.05 MATIC
        } else if (lengthOfDomain == 4) {
            return 3 * 10**16; // 0.03 MATIC
        } else {
            return 1 * 10**16; // 0.01 MATIC
        }
    }

    // Let owner add name to mapping
    function registerDomainToOwner(string calldata name) public payable {
        require(domains[name] == address(0)); // Require: ensure name not registered yet
        
        uint256 _priceOfDomain = priceOfDomain(name); // Set the _priceOfDomain = that of the name that's set
        require(msg.value >= _priceOfDomain, "Insufficient MATIC for Scoops Domain purchase"); // Ensure enough MATIC put into contract via `priceOfDomain`
        
        string memory _name = string(abi.encodePacked(name, ".", scoopdomain));

        string memory finalSvg = string(abi.encodePacked(svgPartOne, _name, svgPartTwo));
        uint256 newRecordId = _tokenIds.current();
        uint256 length = StringUtils.stringLength(name);
        string memory stringLength = Strings.toString(length);

        // Register via unique tokenID
        console.log("Registering %s.%s on the contract with tokenID %d", name, scoopdomain, newRecordId);

        // Compile everything together between name, description, image, and metadat
        string memory json = Base64.encode(
            abi.encodePacked(
                '{"name": "',
                _name,
                '", "description": "A freshly minted Scoops Domains on Polygon", "image": "data:image/svg+xml;base64,',
                Base64.encode(bytes(finalSvg)),
                '","length":"',
                stringLength,
                '"}'
            )
        );

        string memory finalTokenUri = string(abi.encodePacked("data:application/json;base64,", json));

        console.log("\n--------------------------------------------------------");
        console.log("Final tokenURI:", finalTokenUri);
        console.log("--------------------------------------------------------\n");

        _safeMint(msg.sender, newRecordId);
        _setTokenURI(newRecordId, finalTokenUri);
        domains[name] = msg.sender; // Link domain name w/ the minter (message.sender)
        
        _tokenIds.increment();
        // console.log("%s has minted a Scoops Domain!", msg.sender);
    }

    // Return domain owner's wallet address
    function getOwnerAddress(string calldata name) public view returns (address) {
        return domains[name]; // Confirm owner is the domain txn sender
    }

    // SET the owner to their domain
    function setRecordOfDomain(string calldata name, string calldata record) public {
        require(domains[name] == msg.sender); // Require: confirm domain owner is txn sender
        records[name] = record; // Set the name record to the record
    }

    // GET the domain's record
    function getRecordOfDomain(string calldata name) public view returns(string memory) {
        return records[name]; // Retrieve domain's record by name
    }
}
