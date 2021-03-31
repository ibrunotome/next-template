import '../styles/font.css'
import 'tailwindcss/tailwind.css'
import { DefaultSeo } from 'next-seo'
import Head from 'next/head'
import NextNprogress from 'nextjs-progressbar'
import SEO from '../../next-seo.config'
import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Template</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#f231a5" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="A simple template to start new Next.js + Tailwind + Typescript projects"
        />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_ZpC3gnD_vx3rCs.woff2"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_bZF3gnD_vx3rCs.woff2"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_c5H3gnD_vx3rCs.woff2"
          as="font"
          crossOrigin="anonymous"
        />
      </Head>

      <DefaultSeo {...SEO} />

      <NextNprogress
        color="#f231a5"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />

      <Component {...pageProps} />
    </>
  )
}

export default App
