// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFTMint is ERC721Enumerable, Ownable {
    uint256 public maxSupply = 1000;
    uint256 public currentTokenId = 0;

    constructor() ERC721("NFTMint", "NFT") Ownable(msg.sender) {}

    function mint() public {
        require(currentTokenId < maxSupply, "Max supply reached");

        currentTokenId++;
        _safeMint(msg.sender, currentTokenId);
    }

    function _baseURI() internal pure override returns (string memory) {
        return "https://your-base-uri.com/metadata/";
    }
}
