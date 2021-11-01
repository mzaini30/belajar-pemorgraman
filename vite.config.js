import WindiCSS from 'vite-plugin-windicss'
import { imagetools } from 'vite-imagetools'

export default {
  plugins: [
    WindiCSS(),
    imagetools()
  ],
}
