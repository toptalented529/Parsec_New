import { ChainId } from 'parsec-swap-sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x2Fb4B1f244f3C380e25d5dA42D4F15a8238eeb2b',
  [ChainId.TESTNET]: '0x2Fb4B1f244f3C380e25d5dA42D4F15a8238eeb2b',
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
