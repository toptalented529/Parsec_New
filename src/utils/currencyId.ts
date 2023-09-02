import { Currency, ETHER, Token } from 'parsec-swap-sdk'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'PSC'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}

export default currencyId
  