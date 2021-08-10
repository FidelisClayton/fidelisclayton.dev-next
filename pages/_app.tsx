import 'prismjs/themes/prism-tomorrow.css'
import CategoriesProvider from '../providers/CategoriesProvider'
import SeriesProvider from '../providers/SeriesProvider'

import '../styles/global.css'

type Props = {
  Component: React.ComponentType
  pageProps: Record<string, unknown>
}

const App: React.ComponentType<Props> = ({ Component, pageProps }) => {
  return (
    <CategoriesProvider>
      <SeriesProvider>
        <Component {...pageProps} />
      </SeriesProvider>
    </CategoriesProvider>
  )
}

export default App
