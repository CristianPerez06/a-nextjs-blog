import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../assets/main.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="description" content="a-nextjs-blog" />
        <title>a-nextjs-blog</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
