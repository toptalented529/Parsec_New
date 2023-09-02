import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'InveSwap',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by InveSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://matchaswap.zilionixx.com/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('InveSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('InveSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('InveSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('InveSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('InveSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('InveSwap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('InveSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('InveSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('InveSwap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('InveSwap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('InveSwap')}`,
      }
    default:
      return null
  }
}
