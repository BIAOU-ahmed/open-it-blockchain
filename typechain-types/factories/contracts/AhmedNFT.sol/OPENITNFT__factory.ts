/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  OPENITNFT,
  OPENITNFTInterface,
} from "../../../contracts/AhmedNFT.sol/OPENITNFT";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600981526020017f4f50454e49544e465400000000000000000000000000000000000000000000008152506040518060400160405280600981526020017f41686d65642d4e4654000000000000000000000000000000000000000000000081525081600090816200008f919062000635565b508060019081620000a1919062000635565b5050506000600190505b60058111620000dc57620000c63382620000e360201b60201c565b8080620000d3906200074b565b915050620000ab565b506200088d565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160362000155576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200014c90620007f9565b60405180910390fd5b62000166816200032960201b60201c565b15620001a9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001a0906200086b565b60405180910390fd5b620001bf6000838360016200037260201b60201c565b620001d0816200032960201b60201c565b1562000213576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200020a906200086b565b60405180910390fd5b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4620003256000838360016200037860201b60201c565b5050565b60008073ffffffffffffffffffffffffffffffffffffffff1662000353836200037e60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b50505050565b50505050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200043d57607f821691505b602082108103620004535762000452620003f5565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620004bd7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200047e565b620004c986836200047e565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b600062000516620005106200050a84620004e1565b620004eb565b620004e1565b9050919050565b6000819050919050565b6200053283620004f5565b6200054a62000541826200051d565b8484546200048b565b825550505050565b600090565b6200056162000552565b6200056e81848462000527565b505050565b5b8181101562000596576200058a60008262000557565b60018101905062000574565b5050565b601f821115620005e557620005af8162000459565b620005ba846200046e565b81016020851015620005ca578190505b620005e2620005d9856200046e565b83018262000573565b50505b505050565b600082821c905092915050565b60006200060a60001984600802620005ea565b1980831691505092915050565b6000620006258383620005f7565b9150826002028217905092915050565b6200064082620003bb565b67ffffffffffffffff8111156200065c576200065b620003c6565b5b62000668825462000424565b620006758282856200059a565b600060209050601f831160018114620006ad576000841562000698578287015190505b620006a4858262000617565b86555062000714565b601f198416620006bd8662000459565b60005b82811015620006e757848901518255600182019150602085019450602081019050620006c0565b8683101562000707578489015162000703601f891682620005f7565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006200075882620004e1565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036200078d576200078c6200071c565b5b600182019050919050565b600082825260208201905092915050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000620007e160208362000798565b9150620007ee82620007a9565b602082019050919050565b600060208201905081810360008301526200081481620007d2565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b600062000853601c8362000798565b915062000860826200081b565b602082019050919050565b60006020820190508181036000830152620008868162000844565b9050919050565b612287806200089d6000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb46514610224578063b88d4fde14610240578063c87b56dd1461025c578063e985e9c51461028c576100cf565b80636352211e146101a657806370a08231146101d657806395d89b4114610206576100cf565b806301ffc9a7146100d457806306fdde0314610104578063081812fc14610122578063095ea7b31461015257806323b872dd1461016e57806342842e0e1461018a575b600080fd5b6100ee60048036038101906100e9919061153c565b6102bc565b6040516100fb9190611584565b60405180910390f35b61010c61039e565b604051610119919061162f565b60405180910390f35b61013c60048036038101906101379190611687565b610430565b60405161014991906116f5565b60405180910390f35b61016c6004803603810190610167919061173c565b610476565b005b6101886004803603810190610183919061177c565b61058d565b005b6101a4600480360381019061019f919061177c565b6105ed565b005b6101c060048036038101906101bb9190611687565b61060d565b6040516101cd91906116f5565b60405180910390f35b6101f060048036038101906101eb91906117cf565b610693565b6040516101fd919061180b565b60405180910390f35b61020e61074a565b60405161021b919061162f565b60405180910390f35b61023e60048036038101906102399190611852565b6107dc565b005b61025a600480360381019061025591906119c7565b6107f2565b005b61027660048036038101906102719190611687565b610854565b604051610283919061162f565b60405180910390f35b6102a660048036038101906102a19190611a4a565b6108fb565b6040516102b39190611584565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061038757507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061039757506103968261098f565b5b9050919050565b6060600080546103ad90611ab9565b80601f01602080910402602001604051908101604052809291908181526020018280546103d990611ab9565b80156104265780601f106103fb57610100808354040283529160200191610426565b820191906000526020600020905b81548152906001019060200180831161040957829003601f168201915b5050505050905090565b600061043b826109f9565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006104818261060d565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036104f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104e890611b5c565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610510610a44565b73ffffffffffffffffffffffffffffffffffffffff16148061053f575061053e81610539610a44565b6108fb565b5b61057e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161057590611bee565b60405180910390fd5b6105888383610a4c565b505050565b61059e610598610a44565b82610b05565b6105dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d490611c80565b60405180910390fd5b6105e8838383610b9a565b505050565b610608838383604051806020016040528060008152506107f2565b505050565b60008061061983610e93565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361068a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161068190611cec565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610703576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106fa90611d7e565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606001805461075990611ab9565b80601f016020809104026020016040519081016040528092919081815260200182805461078590611ab9565b80156107d25780601f106107a7576101008083540402835291602001916107d2565b820191906000526020600020905b8154815290600101906020018083116107b557829003601f168201915b5050505050905090565b6107ee6107e7610a44565b8383610ed0565b5050565b6108036107fd610a44565b83610b05565b610842576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083990611c80565b60405180910390fd5b61084e8484848461103c565b50505050565b606061085f82611098565b61089e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161089590611e10565b60405180910390fd5b60006108a86110d9565b905060008151116108c857604051806020016040528060008152506108f3565b806108d2846110f9565b6040516020016108e3929190611eb8565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610a0281611098565b610a41576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a3890611cec565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610abf8361060d565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610b118361060d565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610b535750610b5281856108fb565b5b80610b9157508373ffffffffffffffffffffffffffffffffffffffff16610b7984610430565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610bba8261060d565b73ffffffffffffffffffffffffffffffffffffffff1614610c10576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c0790611f59565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610c7f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c7690611feb565b60405180910390fd5b610c8c83838360016111c7565b8273ffffffffffffffffffffffffffffffffffffffff16610cac8261060d565b73ffffffffffffffffffffffffffffffffffffffff1614610d02576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cf990611f59565b60405180910390fd5b6004600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4610e8e83838360016111cd565b505050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610f3e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f3590612057565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405161102f9190611584565b60405180910390a3505050565b611047848484610b9a565b611053848484846111d3565b611092576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611089906120e9565b60405180910390fd5b50505050565b60008073ffffffffffffffffffffffffffffffffffffffff166110ba83610e93565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b606060405180606001604052806036815260200161221c60369139905090565b6060600060016111088461135a565b01905060008167ffffffffffffffff8111156111275761112661189c565b5b6040519080825280601f01601f1916602001820160405280156111595781602001600182028036833780820191505090505b509050600082602001820190505b6001156111bc578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85816111b0576111af612109565b5b04945060008503611167575b819350505050919050565b50505050565b50505050565b60006111f48473ffffffffffffffffffffffffffffffffffffffff166114ad565b1561134d578373ffffffffffffffffffffffffffffffffffffffff1663150b7a0261121d610a44565b8786866040518563ffffffff1660e01b815260040161123f949392919061218d565b6020604051808303816000875af192505050801561127b57506040513d601f19601f8201168201806040525081019061127891906121ee565b60015b6112fd573d80600081146112ab576040519150601f19603f3d011682016040523d82523d6000602084013e6112b0565b606091505b5060008151036112f5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112ec906120e9565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611352565b600190505b949350505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083106113b8577a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083816113ae576113ad612109565b5b0492506040810190505b6d04ee2d6d415b85acef810000000083106113f5576d04ee2d6d415b85acef810000000083816113eb576113ea612109565b5b0492506020810190505b662386f26fc10000831061142457662386f26fc10000838161141a57611419612109565b5b0492506010810190505b6305f5e100831061144d576305f5e100838161144357611442612109565b5b0492506008810190505b612710831061147257612710838161146857611467612109565b5b0492506004810190505b60648310611495576064838161148b5761148a612109565b5b0492506002810190505b600a83106114a4576001810190505b80915050919050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611519816114e4565b811461152457600080fd5b50565b60008135905061153681611510565b92915050565b600060208284031215611552576115516114da565b5b600061156084828501611527565b91505092915050565b60008115159050919050565b61157e81611569565b82525050565b60006020820190506115996000830184611575565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156115d95780820151818401526020810190506115be565b60008484015250505050565b6000601f19601f8301169050919050565b60006116018261159f565b61160b81856115aa565b935061161b8185602086016115bb565b611624816115e5565b840191505092915050565b6000602082019050818103600083015261164981846115f6565b905092915050565b6000819050919050565b61166481611651565b811461166f57600080fd5b50565b6000813590506116818161165b565b92915050565b60006020828403121561169d5761169c6114da565b5b60006116ab84828501611672565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006116df826116b4565b9050919050565b6116ef816116d4565b82525050565b600060208201905061170a60008301846116e6565b92915050565b611719816116d4565b811461172457600080fd5b50565b60008135905061173681611710565b92915050565b60008060408385031215611753576117526114da565b5b600061176185828601611727565b925050602061177285828601611672565b9150509250929050565b600080600060608486031215611795576117946114da565b5b60006117a386828701611727565b93505060206117b486828701611727565b92505060406117c586828701611672565b9150509250925092565b6000602082840312156117e5576117e46114da565b5b60006117f384828501611727565b91505092915050565b61180581611651565b82525050565b600060208201905061182060008301846117fc565b92915050565b61182f81611569565b811461183a57600080fd5b50565b60008135905061184c81611826565b92915050565b60008060408385031215611869576118686114da565b5b600061187785828601611727565b92505060206118888582860161183d565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6118d4826115e5565b810181811067ffffffffffffffff821117156118f3576118f261189c565b5b80604052505050565b60006119066114d0565b905061191282826118cb565b919050565b600067ffffffffffffffff8211156119325761193161189c565b5b61193b826115e5565b9050602081019050919050565b82818337600083830152505050565b600061196a61196584611917565b6118fc565b90508281526020810184848401111561198657611985611897565b5b611991848285611948565b509392505050565b600082601f8301126119ae576119ad611892565b5b81356119be848260208601611957565b91505092915050565b600080600080608085870312156119e1576119e06114da565b5b60006119ef87828801611727565b9450506020611a0087828801611727565b9350506040611a1187828801611672565b925050606085013567ffffffffffffffff811115611a3257611a316114df565b5b611a3e87828801611999565b91505092959194509250565b60008060408385031215611a6157611a606114da565b5b6000611a6f85828601611727565b9250506020611a8085828601611727565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611ad157607f821691505b602082108103611ae457611ae3611a8a565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b6000611b466021836115aa565b9150611b5182611aea565b604082019050919050565b60006020820190508181036000830152611b7581611b39565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000602082015250565b6000611bd8603d836115aa565b9150611be382611b7c565b604082019050919050565b60006020820190508181036000830152611c0781611bcb565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206f7220617070726f76656400000000000000000000000000000000000000602082015250565b6000611c6a602d836115aa565b9150611c7582611c0e565b604082019050919050565b60006020820190508181036000830152611c9981611c5d565b9050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b6000611cd66018836115aa565b9150611ce182611ca0565b602082019050919050565b60006020820190508181036000830152611d0581611cc9565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b6000611d686029836115aa565b9150611d7382611d0c565b604082019050919050565b60006020820190508181036000830152611d9781611d5b565b9050919050565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b6000611dfa602f836115aa565b9150611e0582611d9e565b604082019050919050565b60006020820190508181036000830152611e2981611ded565b9050919050565b600081905092915050565b6000611e468261159f565b611e508185611e30565b9350611e608185602086016115bb565b80840191505092915050565b7f2e6a736f6e000000000000000000000000000000000000000000000000000000600082015250565b6000611ea2600583611e30565b9150611ead82611e6c565b600582019050919050565b6000611ec48285611e3b565b9150611ed08284611e3b565b9150611edb82611e95565b91508190509392505050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000611f436025836115aa565b9150611f4e82611ee7565b604082019050919050565b60006020820190508181036000830152611f7281611f36565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611fd56024836115aa565b9150611fe082611f79565b604082019050919050565b6000602082019050818103600083015261200481611fc8565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b60006120416019836115aa565b915061204c8261200b565b602082019050919050565b6000602082019050818103600083015261207081612034565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b60006120d36032836115aa565b91506120de82612077565b604082019050919050565b60006020820190508181036000830152612102816120c6565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600081519050919050565b600082825260208201905092915050565b600061215f82612138565b6121698185612143565b93506121798185602086016115bb565b612182816115e5565b840191505092915050565b60006080820190506121a260008301876116e6565b6121af60208301866116e6565b6121bc60408301856117fc565b81810360608301526121ce8184612154565b905095945050505050565b6000815190506121e881611510565b92915050565b600060208284031215612204576122036114da565b5b6000612212848285016121d9565b9150509291505056fe697066733a2f2f516d506577504b526733466f574461434b785739583676587661396a42706d6777534851614a41796e39527233582fa2646970667358221220fe8510a4d606e53452e647c74c5674cebc304e9b9dbb00be9c03303c7574a3c664736f6c63430008130033";

type OPENITNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OPENITNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OPENITNFT__factory extends ContractFactory {
  constructor(...args: OPENITNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<OPENITNFT> {
    return super.deploy(overrides || {}) as Promise<OPENITNFT>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): OPENITNFT {
    return super.attach(address) as OPENITNFT;
  }
  override connect(signer: Signer): OPENITNFT__factory {
    return super.connect(signer) as OPENITNFT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OPENITNFTInterface {
    return new utils.Interface(_abi) as OPENITNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OPENITNFT {
    return new Contract(address, _abi, signerOrProvider) as OPENITNFT;
  }
}