import Head from 'next/head'
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
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
const getPrefersDarkMode = () => {
  if (typeof window !== 'undefined')
    return window.matchMedia('(prefers-color-scheme: dark)').matches

  return false
}

const getLocalStorageDarkMode = () => {
  if (typeof window !== 'undefined')
    return window?.localStorage.getItem('isDarkMode') === 'true'

  return false
}

const isDark = getLocalStorageDarkMode() ?? getPrefersDarkMode() ?? false

if (isDark) {
  document.documentElement.classList.add('dark')
  document.body.style.backgroundColor = '#070a0e'
} else {
  document.documentElement.classList.remove('dark')
  document.body.style.backgroundColor = '#fff'
}
            `,
            }}
          />
        </Head>
        <Component {...pageProps} />
      </SeriesProvider>
    </CategoriesProvider>
  )
}

export default App
