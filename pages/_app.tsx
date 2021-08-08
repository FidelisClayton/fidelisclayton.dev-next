import 'prismjs/themes/prism-tomorrow.css'

import '../styles/global.css'

type Props = {
  Component: React.ComponentType
  pageProps: Record<string, unknown>
}

const App: React.ComponentType<Props> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default App
