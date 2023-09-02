import { MenuEntry } from 'parsec-swap-uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  // {
  //   label: t('Home'),
  //   icon: 'HomeIcon',
  //   href: 'https://www.investoland.io/',
  // },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/pool',
      },
    ],
  },
  // {
  //   label: t('Earning'),
  //   icon: 'EarningIcon',
  // },
  {
    label: t('Earn'),
    icon: 'EarningIcon',
    items: [
      {
        label: t('Farms'),
        href: '/farms',
      },
      {
        label: t('Pools'),
        href: '/pools',
      },
    ],
  },
  // {
  //   label: t('NFT Marketplace'),
  //   icon: 'NftIcon',
  //   href: '/marketplace',
  // },
  // {
  //   label: t('Launchpad'),
  //   icon: 'LaunchpadIcon',
  //   href: '/launchpad-test',
  //   // status: {
  //   //   text: t('Win').toLocaleUpperCase(),
  //   //   color: 'success',
  //   // },
  // },
  // {
  //   label: t('Gamification'),
  //   icon: 'GameIcon',
  //   href: '/gamification',
  // },
  // {
  //   label: t('Payment'),
  //   icon: 'GameIcon',
  //   href: '/payment',
  // },
  // {
  //   label: t('Info'),
  //   icon: 'InfoIcon',
  //   href: '/info',
  // },
  {
    label: t('Contact'),
    icon: 'InfoIcon', 
    items: [
      // {
      //   label: t('Overview'),
      //   href: 'https://infoswap.investoland.io/home',
      //   target:"_blank"

      // },
      // {
      //   label: t('Pools'),
      //   href: 'https://infoswap.investoland.io/pairs',

      // }, 
      // {
      //   label: t('Tokens'),
      //   href: 'https://infoswap.investoland.io/tokens',
      // },
    ],
  },
]

export default config
