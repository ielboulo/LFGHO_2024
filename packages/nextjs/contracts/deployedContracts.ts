/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  31337: {
    GhoFlashMinter: {
      address: "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "ghoToken",
              type: "address",
            },
            {
              internalType: "address",
              name: "ghoTreasury",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "fee",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "addressesProvider",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "oldFee",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "newFee",
              type: "uint256",
            },
          ],
          name: "FeeUpdated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "ghoTreasury",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "asset",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "FeesDistributedToTreasury",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "receiver",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "initiator",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "asset",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "fee",
              type: "uint256",
            },
          ],
          name: "FlashMint",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "oldGhoTreasury",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newGhoTreasury",
              type: "address",
            },
          ],
          name: "GhoTreasuryUpdated",
          type: "event",
        },
        {
          inputs: [],
          name: "ADDRESSES_PROVIDER",
          outputs: [
            {
              internalType: "contract IPoolAddressesProvider",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "CALLBACK_SUCCESS",
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
          inputs: [],
          name: "GHO_TOKEN",
          outputs: [
            {
              internalType: "contract IGhoToken",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "MAX_FEE",
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
          inputs: [],
          name: "distributeFeesToTreasury",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "token",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "flashFee",
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
              internalType: "contract IERC3156FlashBorrower",
              name: "receiver",
              type: "address",
            },
            {
              internalType: "address",
              name: "token",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "flashLoan",
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
          inputs: [],
          name: "getFee",
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
          inputs: [],
          name: "getGhoTreasury",
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
              name: "token",
              type: "address",
            },
          ],
          name: "maxFlashLoan",
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
              name: "newFee",
              type: "uint256",
            },
          ],
          name: "updateFee",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newGhoTreasury",
              type: "address",
            },
          ],
          name: "updateGhoTreasury",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {
        ADDRESSES_PROVIDER: "contracts/IGhoFlashMinter.sol",
        CALLBACK_SUCCESS: "contracts/IGhoFlashMinter.sol",
        GHO_TOKEN: "contracts/IGhoFlashMinter.sol",
        MAX_FEE: "contracts/IGhoFlashMinter.sol",
        distributeFeesToTreasury: "contracts/IGhoFlashMinter.sol",
        flashFee: "contracts/IGhoFlashMinter.sol",
        flashLoan: "contracts/IGhoFlashMinter.sol",
        getFee: "contracts/IGhoFlashMinter.sol",
        getGhoTreasury: "contracts/IGhoFlashMinter.sol",
        maxFlashLoan: "contracts/IGhoFlashMinter.sol",
        updateFee: "contracts/IGhoFlashMinter.sol",
        updateGhoTreasury: "contracts/IGhoFlashMinter.sol",
      },
    },
    YourContract: {
      address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "_owner",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "greetingSetter",
              type: "address",
            },
            {
              indexed: false,
              internalType: "string",
              name: "newGreeting",
              type: "string",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "premium",
              type: "bool",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "GreetingChange",
          type: "event",
        },
        {
          inputs: [],
          name: "greeting",
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
          inputs: [],
          name: "premium",
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
              internalType: "string",
              name: "_newGreeting",
              type: "string",
            },
          ],
          name: "setGreeting",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [],
          name: "totalCounter",
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
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "userGreetingCounter",
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
          inputs: [],
          name: "withdraw",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          stateMutability: "payable",
          type: "receive",
        },
      ],
      inheritedFunctions: {},
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
