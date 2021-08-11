import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'

const getLanguage = (ctx: DocumentContext) => {
  if (ctx.pathname === '/posts/[...id]') {
    const id = ctx.query.id

    return id.length > 1 ? id[0] : 'en'
  }

  return 'en'
}

class MyDocument extends Document<{ language: string }> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    const language = getLanguage(ctx)

    return { ...initialProps, language }
  }

  render() {
    return (
      <Html lang={this.props.language}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
