// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "hardhat/console.sol";

contract ElonNFT is ERC721URIStorage {
    uint private _tokenIds;

    constructor() ERC721("ElonMusk", "ELON") {}

    function mintNFT() public returns (uint256) {
        _tokenIds++;

        uint newItemId = _tokenIds;

        _mint(msg.sender, newItemId);
        _setTokenURI(
            newItemId,
            "https://coral-cautious-mastodon-764.mypinata.cloud/ipfs/QmQ2br2JnT6jF9gU7WuThfBP1cdkXkgNjmAinWenMbiRX3"
        );

        console.log(
            "The NFT ID %s has been minted to %s",
            newItemId,
            msg.sender
        );

        return newItemId;
    }
}
