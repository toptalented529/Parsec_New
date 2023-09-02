import { getAddress } from 'utils/addressHelpers'

describe('getAddress', () => {
  const address = {
    90: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    93: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
  }

  it(`get address for mainnet (chainId 56)`, () => {
    process.env.REACT_APP_CHAIN_ID = '56'
    const expected = address[56]
    expect(getAddress(address)).toEqual(expected)
  })
  it(`get address for testnet (chainId 1120)`, () => {
    process.env.REACT_APP_CHAIN_ID = '1120'
    const expected = address[1120]
    expect(getAddress(address)).toEqual(expected)
  })
  it(`get address for any other network (chainId 31337)`, () => {
    process.env.REACT_APP_CHAIN_ID = '31337'
    const expected = address[56]
    expect(getAddress(address)).toEqual(expected)
  })
})
