/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { UpgradeV4, UpgradeV4Interface } from "../UpgradeV4";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_address",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "publicKey",
        type: "bytes32",
      },
    ],
    name: "NewDevice",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "NewMember",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "enum UpgradeV4.upgradeType",
        name: "_upgradeType",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "ipfsHash",
        type: "bytes32",
      },
    ],
    name: "NewUpgrade",
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
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "publicKey",
        type: "bytes32",
      },
    ],
    name: "addDevice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "addToAllowlist",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum UpgradeV4.upgradeType",
        name: "_upgradeType",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "_version",
        type: "uint8",
      },
    ],
    name: "deleteUpgrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "firmwareId",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum UpgradeV4.upgradeType",
        name: "_upgradeType",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "_version",
        type: "uint8",
      },
    ],
    name: "getHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum UpgradeV4.upgradeType",
        name: "_upgradeType",
        type: "uint8",
      },
    ],
    name: "getLatestHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum UpgradeV4.upgradeType",
        name: "_upgradeType",
        type: "uint8",
      },
    ],
    name: "getVersion",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "_minorVersion",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "_majorVersion",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "_firmwareId",
        type: "bytes32",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "isAllowed",
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
        name: "_address",
        type: "address",
      },
    ],
    name: "isDevice",
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
        internalType: "enum UpgradeV4.upgradeType",
        name: "_upgradeType",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "_ipfsHash",
        type: "bytes32",
      },
    ],
    name: "newUpgrade",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506120e5806100206000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063914b44d91161008c578063e3fc372f11610066578063e3fc372f14610247578063f2fde38b14610277578063f6fb664114610293578063f8e86ece146102b1576100ea565b8063914b44d9146101df578063babcc539146101fb578063bb3279e61461022b576100ea565b806360ef9f58116100c857806360ef9f581461016b5780636dc7a35f14610187578063715018a6146101b75780638da5cb5b146101c1576100ea565b80631c7c61a5146100ef5780634ced11f91461011f5780635cae81311461014f575b600080fd5b61010960048036038101906101049190611916565b6102e1565b6040516101169190611d53565b60405180910390f35b61013960048036038101906101349190611916565b61039d565b6040516101469190611ed7565b60405180910390f35b610169600480360381019061016491906118b3565b610450565b005b6101856004803603810190610180919061193f565b610800565b005b6101a1600480360381019061019c919061184e565b610ae6565b6040516101ae9190611d38565b60405180910390f35b6101bf610b41565b005b6101c9610c7e565b6040516101d69190611cf4565b60405180910390f35b6101f960048036038101906101f49190611877565b610ca8565b005b6102156004803603810190610210919061184e565b610e3e565b6040516102229190611d38565b60405180910390f35b6102456004803603810190610240919061197b565b610e94565b005b610261600480360381019061025c919061197b565b611090565b60405161026e9190611d53565b60405180910390f35b610291600480360381019061028c919061184e565b61119d565b005b61029b611349565b6040516102a89190611d53565b60405180910390f35b6102cb60048036038101906102c6919061184e565b61134f565b6040516102d89190611d38565b60405180910390f35b6000600115156102f033610e3e565b1515146102fc57600080fd5b61039682606a600085600181111561033d577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6001811115610375577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b815260200190815260200160002060009054906101000a900460ff16611090565b9050919050565b6000600115156103ac33610e3e565b1515146103b857600080fd5b606a60008360018111156103f5577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600181111561042d577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b815260200190815260200160002060009054906101000a900460ff169050919050565b600060019054906101000a900460ff1680610476575060008054906101000a900460ff16155b6104b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104ac90611df7565b60405180910390fd5b60008060019054906101000a900460ff161590508015610505576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b60011515606760009054906101000a900460ff161515141561055c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161055390611e97565b60405180910390fd5b6105646114ae565b84606560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461060457610603606560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1661119d565b5b82606a6000806001811115610642577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600181111561067a577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b815260200190815260200160002060006101000a81548160ff021916908360ff16021790555083606a60006001808111156106de577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6001811115610716577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b815260200190815260200160002060006101000a81548160ff021916908360ff1602179055506001606b6000606560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550816066819055506001606760006101000a81548160ff02191690831515021790555080156107f95760008060016101000a81548160ff0219169083151502179055505b5050505050565b610808611597565b73ffffffffffffffffffffffffffffffffffffffff16610826610c7e565b73ffffffffffffffffffffffffffffffffffffffff161461087c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161087390611e37565b60405180910390fd5b6000801b8114156108c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108b990611e17565b60405180910390fd5b6001606a6000846001811115610901577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6001811115610939577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b815260200190815260200160002060008282829054906101000a900460ff166109629190611f03565b92506101000a81548160ff021916908360ff16021790555080606960008460018111156109b8577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60018111156109f0577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b81526020019081526020016000206000606a6000866001811115610a3d577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6001811115610a75577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b815260200190815260200160002060009054906101000a900460ff1660ff1660ff168152602001908152602001600020819055507fc891fab420935b5444f6b32b722173640f8b97f4b55485ca53bb9215ab57a0308282604051610ada929190611d6e565b60405180910390a15050565b600080606860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414610b375760019050610b3c565b600090505b919050565b610b49611597565b73ffffffffffffffffffffffffffffffffffffffff16610b67610c7e565b73ffffffffffffffffffffffffffffffffffffffff1614610bbd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bb490611e37565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36000603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610cb0611597565b73ffffffffffffffffffffffffffffffffffffffff16610cce610c7e565b73ffffffffffffffffffffffffffffffffffffffff1614610d24576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d1b90611e37565b60405180910390fd5b610d2d82610ae6565b15610d6d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d6490611eb7565b60405180910390fd5b6000801b811415610db3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610daa90611e17565b60405180910390fd5b80606860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610e008261134f565b507f0d38976fd808988dcfd41eaacc15b6e8922bae80ed0841602da9701225c152008282604051610e32929190611d0f565b60405180910390a15050565b6000606b60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b6000801b610ea28383611090565b1415610ee3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eda90611e77565b60405180910390fd5b6001610eee8361039d565b60ff161015610f32576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f2990611e57565b60405180910390fd5b6000801b60696000846001811115610f73577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6001811115610fab577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b815260200190815260200160002060008360ff1660ff168152602001908152602001600020819055506001606a6000846001811115611013577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600181111561104b577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b815260200190815260200160002060008282829054906101000a900460ff166110749190611f3a565b92506101000a81548160ff021916908360ff1602179055505050565b60006001151561109f33610e3e565b1515146110ab57600080fd5b60006110b68461039d565b60ff1614156110fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110f190611db7565b60405180910390fd5b60696000846001811115611137577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600181111561116f577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b815260200190815260200160002060008360ff1660ff16815260200190815260200160002054905092915050565b6111a5611597565b73ffffffffffffffffffffffffffffffffffffffff166111c3610c7e565b73ffffffffffffffffffffffffffffffffffffffff1614611219576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161121090611e37565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611289576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161128090611d97565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60665481565b6000611359611597565b73ffffffffffffffffffffffffffffffffffffffff16611377610c7e565b73ffffffffffffffffffffffffffffffffffffffff16146113cd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113c490611e37565b60405180910390fd5b6113d682610e3e565b15611416576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161140d90611dd7565b60405180910390fd5b6001606b60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507fb4dcb6dd550f27b5917ebf674899ea7046ff91790c6f9f01431617ad39819db28260405161149d9190611cf4565b60405180910390a160019050919050565b600060019054906101000a900460ff16806114d4575060008054906101000a900460ff16155b611513576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161150a90611df7565b60405180910390fd5b60008060019054906101000a900460ff161590508015611563576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b61156b61159f565b611573611678565b80156115945760008060016101000a81548160ff0219169083151502179055505b50565b600033905090565b600060019054906101000a900460ff16806115c5575060008054906101000a900460ff16155b611604576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115fb90611df7565b60405180910390fd5b60008060019054906101000a900460ff161590508015611654576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b80156116755760008060016101000a81548160ff0219169083151502179055505b50565b600060019054906101000a900460ff168061169e575060008054906101000a900460ff16155b6116dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116d490611df7565b60405180910390fd5b60008060019054906101000a900460ff16159050801561172d576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b6000611737611597565b905080603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35080156117f75760008060016101000a81548160ff0219169083151502179055505b50565b6000813590506118098161205a565b92915050565b60008135905061181e81612071565b92915050565b60008135905061183381612088565b92915050565b60008135905061184881612098565b92915050565b60006020828403121561186057600080fd5b600061186e848285016117fa565b91505092915050565b6000806040838503121561188a57600080fd5b6000611898858286016117fa565b92505060206118a98582860161180f565b9150509250929050565b600080600080608085870312156118c957600080fd5b60006118d7878288016117fa565b94505060206118e887828801611839565b93505060406118f987828801611839565b925050606061190a8782880161180f565b91505092959194509250565b60006020828403121561192857600080fd5b600061193684828501611824565b91505092915050565b6000806040838503121561195257600080fd5b600061196085828601611824565b92505060206119718582860161180f565b9150509250929050565b6000806040838503121561198e57600080fd5b600061199c85828601611824565b92505060206119ad85828601611839565b9150509250929050565b6119c081611f6e565b82525050565b6119cf81611f80565b82525050565b6119de81611f8c565b82525050565b6119ed81611fd6565b82525050565b6000611a00602683611ef2565b91507f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008301527f64647265737300000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611a66600c83611ef2565b91507f56657273696f6e206973203000000000000000000000000000000000000000006000830152602082019050919050565b6000611aa6601c83611ef2565b91507f4164647265737320616c726561647920696e20616c6c6f774c697374000000006000830152602082019050919050565b6000611ae6602e83611ef2565b91507f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008301527f647920696e697469616c697a65640000000000000000000000000000000000006020830152604082019050919050565b6000611b4c600983611ef2565b91507f48617368206973203000000000000000000000000000000000000000000000006000830152602082019050919050565b6000611b8c602083611ef2565b91507f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726000830152602082019050919050565b6000611bcc601983611ef2565b91507f43616e6e6f742064656c657465203074682076657273696f6e000000000000006000830152602082019050919050565b6000611c0c602483611ef2565b91507f48617368206d7573742062652070726573656e7420617420746865206c6f636160008301527f74696f6e000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611c72600e83611ef2565b91507f496e6974206f6e6c79206f6e63650000000000000000000000000000000000006000830152602082019050919050565b6000611cb2601583611ef2565b91507f44657669636520616c72656164792065786973747300000000000000000000006000830152602082019050919050565b611cee81611fc9565b82525050565b6000602082019050611d0960008301846119b7565b92915050565b6000604082019050611d2460008301856119b7565b611d3160208301846119d5565b9392505050565b6000602082019050611d4d60008301846119c6565b92915050565b6000602082019050611d6860008301846119d5565b92915050565b6000604082019050611d8360008301856119e4565b611d9060208301846119d5565b9392505050565b60006020820190508181036000830152611db0816119f3565b9050919050565b60006020820190508181036000830152611dd081611a59565b9050919050565b60006020820190508181036000830152611df081611a99565b9050919050565b60006020820190508181036000830152611e1081611ad9565b9050919050565b60006020820190508181036000830152611e3081611b3f565b9050919050565b60006020820190508181036000830152611e5081611b7f565b9050919050565b60006020820190508181036000830152611e7081611bbf565b9050919050565b60006020820190508181036000830152611e9081611bff565b9050919050565b60006020820190508181036000830152611eb081611c65565b9050919050565b60006020820190508181036000830152611ed081611ca5565b9050919050565b6000602082019050611eec6000830184611ce5565b92915050565b600082825260208201905092915050565b6000611f0e82611fc9565b9150611f1983611fc9565b92508260ff03821115611f2f57611f2e611fe8565b5b828201905092915050565b6000611f4582611fc9565b9150611f5083611fc9565b925082821015611f6357611f62611fe8565b5b828203905092915050565b6000611f7982611fa9565b9050919050565b60008115159050919050565b6000819050919050565b6000819050611fa482612046565b919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600060ff82169050919050565b6000611fe182611f96565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6002811061205757612056612017565b5b50565b61206381611f6e565b811461206e57600080fd5b50565b61207a81611f8c565b811461208557600080fd5b50565b6002811061209557600080fd5b50565b6120a181611fc9565b81146120ac57600080fd5b5056fea264697066735822122053cc1f41458d460f20881717282edd2381ae708fbdb3aa99f587582d97a34e5464736f6c63430008000033";

export class UpgradeV4__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UpgradeV4> {
    return super.deploy(overrides || {}) as Promise<UpgradeV4>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): UpgradeV4 {
    return super.attach(address) as UpgradeV4;
  }
  connect(signer: Signer): UpgradeV4__factory {
    return super.connect(signer) as UpgradeV4__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UpgradeV4Interface {
    return new utils.Interface(_abi) as UpgradeV4Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UpgradeV4 {
    return new Contract(address, _abi, signerOrProvider) as UpgradeV4;
  }
}
