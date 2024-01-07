export const FILTERS = {
  ALL: 'all',
  AVAILABLE: 'available',
} as const

export const FILTERS_BTNS = {
  [FILTERS.ALL]: {
    text: 'All Products',
  },
  [FILTERS.AVAILABLE]: {
    text: 'Available Now',
  }
} as const
