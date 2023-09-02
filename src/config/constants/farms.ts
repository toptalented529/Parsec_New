import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 251,
    lpSymbol: 'MOS-UNE LP',
    lpAddresses: {
      1120: '0x6eD761c7ceA77EA5295F0F6B7dBC6D82ba8C2ee1',
      56: '0x5BfC4278E4B24F1Da1a10f51c4800b5AAa43d1B4',
    },
    token: tokens.mos,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 252,
    lpSymbol: 'BUSD-UNE LP',
    lpAddresses: {
      1120: '0x90e630AD08Dfa545Ac29E815dcF0A87aB47b1F20',
      56: '0xfE6619603569B172fbb7DcC18CF9DF6B0755FF89',
    },
    token: tokens.busd,
    quoteToken: tokens.busd,
  },
  // {
  //   pid: 253,
  //   lpSymbol: 'MOS-BUSD LP',
  //   lpAddresses: {
  //     1120: '0x1a2e1e69dfba5d0d6cb155Ea5b8fDdC86fA61D69',
  //     56: '0xcb4A7e8fbb0a293D8c889671A8695CA148535c6b',
  //   },
  //   token: tokens.mos,
  //   quoteToken: tokens.busd,
  // },
  // {
  //   pid: 254,
  //   lpSymbol: 'USDT-PSC LP',
  //   lpAddresses: {
  //     1120: '0x1a2e1e69dfba5d0d6cb155Ea5b8fDdC86fA61D69',
  //     56: '0x655A2C3b7a634dcBfDA9C7f2F805E6b7408435E7',
  //   },
  //   token: tokens.usdt,
  //   quoteToken: tokens.wbnb,
  // },
]

export default farms
