import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import type { DocumentContext, DocumentInitialProps } from 'next/document'

const Document = () => {
    return (
        <Html lang="en">
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

Document.getInitialProps = async (ctx: DocumentContext): Promise<DocumentInitialProps> => {
    const initialProps = await NextDocument.getInitialProps(ctx)
    return { ...initialProps }
}

export default Document