import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  // {
  //   sousId: 1,
  //   stakingToken: tokens.mos,
  //   earningToken: tokens.busd,
  //   contractAddress: {
  //     1120: '0xbcDeC49AA67E395a5a7b4f4b9e345865E5902639',
  //     56: '0x36906B717b8FC162Dab884Dbe7d6f21557aa556e',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.01331',
  //   sortOrder: 1,
  //   isFinished: false,
  // },
  {
    sousId: 2,
    stakingToken: tokens.dai,
    earningToken: tokens.usdt,
    contractAddress: {
      1120:'0xF2345F6bABf9513069715EF886B1209128C5246B',
      56: '0xdc9a713ec043e58282460af4d02188bf5c5a0191',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.01331',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 6,
    stakingToken: tokens.UNE,
    earningToken: tokens.UNE,
    contractAddress: {
      1120: '0x18FC8ef0Aa20C169D74e584B6AE8D14a281F6b80',
      56: '0x36906B717b8FC162Dab884Dbe7d6f21557aa556e',
    },
    poolCategory: PoolCategory.BINANCE,
    harvest: true,
    tokenPerBlock: '0.01331',
    sortOrder: 1,
    isFinished: false,
  },
]

export default pools
