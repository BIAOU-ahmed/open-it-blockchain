// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

import "@openzeppelin/contracts/access/Ownable.sol";

contract AhmedNFT is ERC721 {
    uint256 public PRICE_IN_WEI = 0.1 ether;
    uint256 private _tokenIdCounter;

    constructor() ERC721("AhmedNFT", "Ah-NFT") {
        // for (uint i = 1; i <= 5; i++) {
        //     _mint(msg.sender, i);
        // }
    }

    function tokenURI(
        uint256 tokenId
    ) public view virtual override returns (string memory) {
        require(
            _exists(tokenId),
            "ERC721Metadata: URI query for nonexistent token"
        );

        string memory baseURI = _baseURI();
        return
            bytes(baseURI).length > 0
                ? string(
                    abi.encodePacked(
                        baseURI,
                        Strings.toString(tokenId),
                        ".json"
                    )
                )
                : "";
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return "ipfs://QmPewPKRg3FoWDaCKxW9X6vXva9jBpmgwSHQaJAyn9Rr3X/";
    }


    function mintNFT(
        address _to,
        uint256 _tokenId
    ) public {
        super._mint(_to, _tokenId);
        // super._setTokenUri(_tokenId, _uri);
    }
}
