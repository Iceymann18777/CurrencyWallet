import { networks as ethereumNetworks } from '../instances/ethereum'
import { default as tokenSwap } from './tokenSwap'

const ethereum = ethereumNetworks.testnet()

const id =
  parseInt(process.argv[2]) ||
  process.env.SERVER_ID ||
  process.env.ACCOUNT ||
  Math.random().toString().slice(2)

const ROOT_DIR = process.env.ROOT_DIR || '.'

const config = {
  id,
  network: 'testnet',
  storageDir: `${ROOT_DIR}/.storage/__testnet__${id}__`,
  swapRoom: {
    roomName: 'testnet.swap.online',
  },
  ethSwap: () => ({
    gasLimit: 2e5,
    address: '0x6e9c98a8a481bf038ba7e1d669a0086547dd144e',
    abi: [
      {
        constant: false,
        inputs: [
          { name: '_secret', type: 'bytes32' },
          { name: '_ownerAddress', type: 'address' },
        ],
        name: 'withdraw',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [{ name: '_participantAddress', type: 'address' }],
        name: 'getSecret',
        outputs: [{ name: '', type: 'bytes32' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          { name: '', type: 'address' },
          { name: '', type: 'address' },
        ],
        name: 'participantSigns',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          { name: '_secret', type: 'bytes32' },
          { name: 'participantAddress', type: 'address' },
        ],
        name: 'withdrawNoMoney',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'owner',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          { name: '_secretHash', type: 'bytes20' },
          { name: '_participantAddress', type: 'address' },
          { name: '_targetWallet', type: 'address' },
        ],
        name: 'createSwapTarget',
        outputs: [],
        payable: true,
        stateMutability: 'payable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          { name: '', type: 'address' },
          { name: '', type: 'address' },
        ],
        name: 'swaps',
        outputs: [
          { name: 'targetWallet', type: 'address' },
          { name: 'secret', type: 'bytes32' },
          { name: 'secretHash', type: 'bytes20' },
          { name: 'createdAt', type: 'uint256' },
          { name: 'balance', type: 'uint256' },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          { name: '_ownerAddress', type: 'address' },
          { name: '_participantAddress', type: 'address' },
        ],
        name: 'closeSwapByAdminAfterOneYear',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          { name: '_secretHash', type: 'bytes20' },
          { name: '_participantAddress', type: 'address' },
        ],
        name: 'createSwap',
        outputs: [],
        payable: true,
        stateMutability: 'payable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          { name: '_secret', type: 'bytes32' },
          { name: '_ownerAddress', type: 'address' },
          { name: 'participantAddress', type: 'address' },
        ],
        name: 'withdrawOther',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'ratingContractAddress',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [{ name: '_ownerAddress', type: 'address' }],
        name: 'getTargetWallet',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'admin',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [{ name: '_ownerAddress', type: 'address' }],
        name: 'getBalance',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: false,
        inputs: [{ name: '_participantAddress', type: 'address' }],
        name: 'refund',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      { inputs: [], payable: false, stateMutability: 'nonpayable', type: 'constructor' },
      {
        anonymous: false,
        inputs: [
          { indexed: false, name: '_buyer', type: 'address' },
          { indexed: false, name: '_seller', type: 'address' },
          { indexed: false, name: '_value', type: 'uint256' },
          { indexed: false, name: '_secretHash', type: 'bytes20' },
          { indexed: false, name: 'createdAt', type: 'uint256' },
        ],
        name: 'CreateSwap',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          { indexed: false, name: '_buyer', type: 'address' },
          { indexed: false, name: '_seller', type: 'address' },
          { indexed: false, name: '_secretHash', type: 'bytes20' },
          { indexed: false, name: 'withdrawnAt', type: 'uint256' },
        ],
        name: 'Withdraw',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          { indexed: false, name: '_buyer', type: 'address' },
          { indexed: false, name: '_seller', type: 'address' },
        ],
        name: 'Close',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          { indexed: false, name: '_buyer', type: 'address' },
          { indexed: false, name: '_seller', type: 'address' },
          { indexed: false, name: '_secretHash', type: 'bytes20' },
        ],
        name: 'Refund',
        type: 'event',
      },
    ],
    fetchBalance: (address) => ethereum.fetchBalance(address),
    estimateGasPrice: ({ speed }) => ethereum.estimateGasPrice({ speed }),
    sendTransaction: ({ to, amount }) => ethereum.sendTransaction({ to, amount }),
  }),
  swapTokenSwap: () =>
    tokenSwap({
      network: 'testnet',
      name: 'SWAP',
      decimals: 18,
      tokenAddress: '0x348236484ce96a293e210260b90bbfb228d6d1fc',
    }),
}

export { config }
