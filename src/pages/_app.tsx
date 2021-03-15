import type { AppProps } from 'next/app'
import Head from 'next/head'

import 'tailwindcss/tailwind.css'
import '../styles/font.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Template</title>
        <link rel="stylesheet" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#312E81" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and TailwindCSS"
        />

        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_ZpC3gnD_vx3rCs.woff2"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_bZF3gnD_vx3rCs.woff2"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_c5H3gnD_vx3rCs.woff2"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
