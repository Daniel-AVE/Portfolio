// Styles
import '@fortawesome/fontawesome-free/css/all.css'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import {aliases, fa} from 'vuetify/iconsets/fa'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify(
  {
    icons: {
      defaultSet: 'fa',
      aliases,
      sets: {
        fa,
      }
    }
  }
)
