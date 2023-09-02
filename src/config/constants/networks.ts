import { ChainId } from 'parsec-swap-sdk'

const NETWORK_URLS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: 'https://bsc-dataseed1.defibit.io',
  [ChainId.TESTNET]: 'http://75.119.157.148:8545/',
}

export default NETWORK_URLS
