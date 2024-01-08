import { createI18n } from '@padcom/vue-i18n'

import en from './locale/en.mjs'
import de from './locale/de.mjs'

export const i18n = createI18n({
  messages: {
    en,
    de,
  }
})
