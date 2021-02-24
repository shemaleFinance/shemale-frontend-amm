import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://taste.finance/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://taste.finance/farms'
  },
  {
    label: 'Savory',
    icon: 'PoolIcon',
    href: 'https://taste.finance/nests'
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0xF34b702924751434Bdf83Acc2766947d4c38fBEE',
      },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x067FC72ab9743b431Ab8D8a85758B2d30e81E75b',
      },
    ]
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/TasteFinance/",
      },
      {
        label: "Docs",
        href: "https://docs.taste.finance/",
      },
      {
        label: "Blog",
        href: "https://tastefinance.medium.com/",
      },
    ],
  }
]

export default config
