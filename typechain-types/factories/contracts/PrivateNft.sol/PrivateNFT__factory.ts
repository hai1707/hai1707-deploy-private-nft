/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  PrivateNFT,
  PrivateNFTInterface,
} from "../../../contracts/PrivateNft.sol/PrivateNFT";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "initialOwner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC721IncorrectOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721InsufficientApproval",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC721InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "ERC721InvalidOperator",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC721InvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC721InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC721InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721NonexistentToken",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
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
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "NFTBurned",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "NFTMinted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
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
        name: "account",
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
    name: "burnNFT",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "mintNFT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "renounceOwnership",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405260006007553480156200001657600080fd5b50604051620029c0380380620029c083398181016040528101906200003c91906200028d565b806040518060400160405280600781526020017f48616931373037000000000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f48483137000000000000000000000000000000000000000000000000000000008152508160009081620000ba919062000539565b508060019081620000cc919062000539565b505050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620001445760006040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016200013b919062000631565b60405180910390fd5b62000155816200015d60201b60201c565b50506200064e565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620002558262000228565b9050919050565b620002678162000248565b81146200027357600080fd5b50565b60008151905062000287816200025c565b92915050565b600060208284031215620002a657620002a562000223565b5b6000620002b68482850162000276565b91505092915050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200034157607f821691505b602082108103620003575762000356620002f9565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620003c17fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000382565b620003cd868362000382565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b60006200041a620004146200040e84620003e5565b620003ef565b620003e5565b9050919050565b6000819050919050565b6200043683620003f9565b6200044e620004458262000421565b8484546200038f565b825550505050565b600090565b6200046562000456565b620004728184846200042b565b505050565b5b818110156200049a576200048e6000826200045b565b60018101905062000478565b5050565b601f821115620004e957620004b3816200035d565b620004be8462000372565b81016020851015620004ce578190505b620004e6620004dd8562000372565b83018262000477565b50505b505050565b600082821c905092915050565b60006200050e60001984600802620004ee565b1980831691505092915050565b6000620005298383620004fb565b9150826002028217905092915050565b6200054482620002bf565b67ffffffffffffffff81111562000560576200055f620002ca565b5b6200056c825462000328565b620005798282856200049e565b600060209050601f831160018114620005b157600084156200059c578287015190505b620005a885826200051b565b86555062000618565b601f198416620005c1866200035d565b60005b82811015620005eb57848901518255600182019150602085019450602081019050620005c4565b868310156200060b578489015162000607601f891682620004fb565b8355505b6001600288020188555050505b505050505050565b6200062b8162000248565b82525050565b600060208201905062000648600083018462000620565b92915050565b612362806200065e6000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c806370a08231116100a2578063a22cb46511610071578063a22cb465146102df578063b88d4fde146102fb578063c87b56dd14610317578063e985e9c514610347578063f2fde38b1461037757610116565b806370a0823114610269578063715018a6146102995780638da5cb5b146102a357806395d89b41146102c157610116565b806323b872dd116100e957806323b872dd146101b55780632890e0d7146101d157806342842e0e146101ed57806354ba0f27146102095780636352211e1461023957610116565b806301ffc9a71461011b57806306fdde031461014b578063081812fc14610169578063095ea7b314610199575b600080fd5b61013560048036038101906101309190611add565b610393565b6040516101429190611b25565b60405180910390f35b610153610475565b6040516101609190611bd0565b60405180910390f35b610183600480360381019061017e9190611c28565b610507565b6040516101909190611c96565b60405180910390f35b6101b360048036038101906101ae9190611cdd565b610523565b005b6101cf60048036038101906101ca9190611d1d565b610539565b005b6101eb60048036038101906101e69190611c28565b61063b565b005b61020760048036038101906102029190611d1d565b6106f4565b005b610223600480360381019061021e9190611d70565b610714565b6040516102309190611dac565b60405180910390f35b610253600480360381019061024e9190611c28565b61078b565b6040516102609190611c96565b60405180910390f35b610283600480360381019061027e9190611d70565b61079d565b6040516102909190611dac565b60405180910390f35b6102a161081d565b005b6102ab610831565b6040516102b89190611c96565b60405180910390f35b6102c961085b565b6040516102d69190611bd0565b60405180910390f35b6102f960048036038101906102f49190611df3565b6108ed565b005b61031560048036038101906103109190611f68565b610903565b005b610331600480360381019061032c9190611c28565b610920565b60405161033e9190611bd0565b60405180910390f35b610361600480360381019061035c9190611feb565b610989565b60405161036e9190611b25565b60405180910390f35b610391600480360381019061038c9190611d70565b610a1d565b005b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061045e57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061046e575061046d82610aa3565b5b9050919050565b6060600080546104849061205a565b80601f01602080910402602001604051908101604052809291908181526020018280546104b09061205a565b80156104fd5780601f106104d2576101008083540402835291602001916104fd565b820191906000526020600020905b8154815290600101906020018083116104e057829003601f168201915b5050505050905090565b600061051282610b0d565b5061051c82610b95565b9050919050565b6105358282610530610bd2565b610bda565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036105ab5760006040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016105a29190611c96565b60405180910390fd5b60006105bf83836105ba610bd2565b610bec565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610635578382826040517f64283d7b00000000000000000000000000000000000000000000000000000000815260040161062c9392919061208b565b60405180910390fd5b50505050565b3373ffffffffffffffffffffffffffffffffffffffff1661065b8261078b565b73ffffffffffffffffffffffffffffffffffffffff16146106b1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106a89061210e565b60405180910390fd5b6106ba81610e06565b7f3c176691ca154a2f6fe978a2a633a33ee77dbe2902e67a75400720845a4b2ce1816040516106e99190611dac565b60405180910390a150565b61070f83838360405180602001604052806000815250610903565b505050565b600061071e610e8c565b600160076000828254610731919061215d565b92505081905550600060075490506107498382610f13565b7f4cc0a9c4a99ddc700de1af2c9f916a7cbfdb71f14801ccff94061ad1ef8a8040838260405161077a929190612191565b60405180910390a180915050919050565b600061079682610b0d565b9050919050565b60008173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461080d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108049061210e565b60405180910390fd5b6108168261100c565b9050919050565b610825610e8c565b61082f60006110c6565b565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606001805461086a9061205a565b80601f01602080910402602001604051908101604052809291908181526020018280546108969061205a565b80156108e35780601f106108b8576101008083540402835291602001916108e3565b820191906000526020600020905b8154815290600101906020018083116108c657829003601f168201915b5050505050905090565b6108ff6108f8610bd2565b838361118c565b5050565b61090e848484610539565b61091a848484846112fb565b50505050565b606061092b82610b0d565b5060006109366114b2565b905060008151116109565760405180602001604052806000815250610981565b80610960846114c9565b6040516020016109719291906121f6565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610a25610e8c565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610a975760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401610a8e9190611c96565b60405180910390fd5b610aa0816110c6565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600080610b1983611597565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610b8c57826040517f7e273289000000000000000000000000000000000000000000000000000000008152600401610b839190611dac565b60405180910390fd5b80915050919050565b60006004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600033905090565b610be783838360016115d4565b505050565b600080610bf884611597565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614610c3a57610c39818486611799565b5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610ccb57610c7c6000856000806115d4565b6001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055505b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614610d4e576001600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b846002600086815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4809150509392505050565b6000610e156000836000610bec565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610e8857816040517f7e273289000000000000000000000000000000000000000000000000000000008152600401610e7f9190611dac565b60405180910390fd5b5050565b610e94610bd2565b73ffffffffffffffffffffffffffffffffffffffff16610eb2610831565b73ffffffffffffffffffffffffffffffffffffffff1614610f1157610ed5610bd2565b6040517f118cdaa7000000000000000000000000000000000000000000000000000000008152600401610f089190611c96565b60405180910390fd5b565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610f855760006040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401610f7c9190611c96565b60405180910390fd5b6000610f9383836000610bec565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146110075760006040517f73c6ac6e000000000000000000000000000000000000000000000000000000008152600401610ffe9190611c96565b60405180910390fd5b505050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361107f5760006040517f89c62b640000000000000000000000000000000000000000000000000000000081526004016110769190611c96565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036111fd57816040517f5b08ba180000000000000000000000000000000000000000000000000000000081526004016111f49190611c96565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516112ee9190611b25565b60405180910390a3505050565b60008373ffffffffffffffffffffffffffffffffffffffff163b11156114ac578273ffffffffffffffffffffffffffffffffffffffff1663150b7a0261133f610bd2565b8685856040518563ffffffff1660e01b8152600401611361949392919061226f565b6020604051808303816000875af192505050801561139d57506040513d601f19601f8201168201806040525081019061139a91906122d0565b60015b611421573d80600081146113cd576040519150601f19603f3d011682016040523d82523d6000602084013e6113d2565b606091505b50600081510361141957836040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016114109190611c96565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916146114aa57836040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016114a19190611c96565b60405180910390fd5b505b50505050565b606060405180602001604052806000815250905090565b6060600060016114d88461185d565b01905060008167ffffffffffffffff8111156114f7576114f6611e3d565b5b6040519080825280601f01601f1916602001820160405280156115295781602001600182028036833780820191505090505b509050600082602001820190505b60011561158c578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85816115805761157f6122fd565b5b04945060008503611537575b819350505050919050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b808061160d5750600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b1561174157600061161d84610b0d565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415801561168857508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b801561169b57506116998184610989565b155b156116dd57826040517fa9fbf51f0000000000000000000000000000000000000000000000000000000081526004016116d49190611c96565b60405180910390fd5b811561173f57838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b836004600085815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b6117a48383836119b0565b61185857600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361181957806040517f7e2732890000000000000000000000000000000000000000000000000000000081526004016118109190611dac565b60405180910390fd5b81816040517f177e802f00000000000000000000000000000000000000000000000000000000815260040161184f929190612191565b60405180910390fd5b505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083106118bb577a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083816118b1576118b06122fd565b5b0492506040810190505b6d04ee2d6d415b85acef810000000083106118f8576d04ee2d6d415b85acef810000000083816118ee576118ed6122fd565b5b0492506020810190505b662386f26fc10000831061192757662386f26fc10000838161191d5761191c6122fd565b5b0492506010810190505b6305f5e1008310611950576305f5e1008381611946576119456122fd565b5b0492506008810190505b612710831061197557612710838161196b5761196a6122fd565b5b0492506004810190505b60648310611998576064838161198e5761198d6122fd565b5b0492506002810190505b600a83106119a7576001810190505b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158015611a6857508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480611a295750611a288484610989565b5b80611a6757508273ffffffffffffffffffffffffffffffffffffffff16611a4f83610b95565b73ffffffffffffffffffffffffffffffffffffffff16145b5b90509392505050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611aba81611a85565b8114611ac557600080fd5b50565b600081359050611ad781611ab1565b92915050565b600060208284031215611af357611af2611a7b565b5b6000611b0184828501611ac8565b91505092915050565b60008115159050919050565b611b1f81611b0a565b82525050565b6000602082019050611b3a6000830184611b16565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611b7a578082015181840152602081019050611b5f565b60008484015250505050565b6000601f19601f8301169050919050565b6000611ba282611b40565b611bac8185611b4b565b9350611bbc818560208601611b5c565b611bc581611b86565b840191505092915050565b60006020820190508181036000830152611bea8184611b97565b905092915050565b6000819050919050565b611c0581611bf2565b8114611c1057600080fd5b50565b600081359050611c2281611bfc565b92915050565b600060208284031215611c3e57611c3d611a7b565b5b6000611c4c84828501611c13565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611c8082611c55565b9050919050565b611c9081611c75565b82525050565b6000602082019050611cab6000830184611c87565b92915050565b611cba81611c75565b8114611cc557600080fd5b50565b600081359050611cd781611cb1565b92915050565b60008060408385031215611cf457611cf3611a7b565b5b6000611d0285828601611cc8565b9250506020611d1385828601611c13565b9150509250929050565b600080600060608486031215611d3657611d35611a7b565b5b6000611d4486828701611cc8565b9350506020611d5586828701611cc8565b9250506040611d6686828701611c13565b9150509250925092565b600060208284031215611d8657611d85611a7b565b5b6000611d9484828501611cc8565b91505092915050565b611da681611bf2565b82525050565b6000602082019050611dc16000830184611d9d565b92915050565b611dd081611b0a565b8114611ddb57600080fd5b50565b600081359050611ded81611dc7565b92915050565b60008060408385031215611e0a57611e09611a7b565b5b6000611e1885828601611cc8565b9250506020611e2985828601611dde565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611e7582611b86565b810181811067ffffffffffffffff82111715611e9457611e93611e3d565b5b80604052505050565b6000611ea7611a71565b9050611eb38282611e6c565b919050565b600067ffffffffffffffff821115611ed357611ed2611e3d565b5b611edc82611b86565b9050602081019050919050565b82818337600083830152505050565b6000611f0b611f0684611eb8565b611e9d565b905082815260208101848484011115611f2757611f26611e38565b5b611f32848285611ee9565b509392505050565b600082601f830112611f4f57611f4e611e33565b5b8135611f5f848260208601611ef8565b91505092915050565b60008060008060808587031215611f8257611f81611a7b565b5b6000611f9087828801611cc8565b9450506020611fa187828801611cc8565b9350506040611fb287828801611c13565b925050606085013567ffffffffffffffff811115611fd357611fd2611a80565b5b611fdf87828801611f3a565b91505092959194509250565b6000806040838503121561200257612001611a7b565b5b600061201085828601611cc8565b925050602061202185828601611cc8565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061207257607f821691505b6020821081036120855761208461202b565b5b50919050565b60006060820190506120a06000830186611c87565b6120ad6020830185611d9d565b6120ba6040830184611c87565b949350505050565b7f4572726f723a20596f75277265206e6f74206f776e6572000000000000000000600082015250565b60006120f8601783611b4b565b9150612103826120c2565b602082019050919050565b60006020820190508181036000830152612127816120eb565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061216882611bf2565b915061217383611bf2565b925082820190508082111561218b5761218a61212e565b5b92915050565b60006040820190506121a66000830185611c87565b6121b36020830184611d9d565b9392505050565b600081905092915050565b60006121d082611b40565b6121da81856121ba565b93506121ea818560208601611b5c565b80840191505092915050565b600061220282856121c5565b915061220e82846121c5565b91508190509392505050565b600081519050919050565b600082825260208201905092915050565b60006122418261221a565b61224b8185612225565b935061225b818560208601611b5c565b61226481611b86565b840191505092915050565b60006080820190506122846000830187611c87565b6122916020830186611c87565b61229e6040830185611d9d565b81810360608301526122b08184612236565b905095945050505050565b6000815190506122ca81611ab1565b92915050565b6000602082840312156122e6576122e5611a7b565b5b60006122f4848285016122bb565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fdfea2646970667358221220b2d322e4ddce9faade9982e091cfb282196bbc7062341b95f9519e16bbba5ef364736f6c63430008140033";

type PrivateNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PrivateNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PrivateNFT__factory extends ContractFactory {
  constructor(...args: PrivateNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    initialOwner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(initialOwner, overrides || {});
  }
  override deploy(
    initialOwner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(initialOwner, overrides || {}) as Promise<
      PrivateNFT & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): PrivateNFT__factory {
    return super.connect(runner) as PrivateNFT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PrivateNFTInterface {
    return new Interface(_abi) as PrivateNFTInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): PrivateNFT {
    return new Contract(address, _abi, runner) as unknown as PrivateNFT;
  }
}
