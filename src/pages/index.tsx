import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import config from '../aws-exports'
import { Amplify } from 'aws-amplify'

import { AmplifyProvider, useBreakpointValue } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

import { CardLayoutCollection, CardLayout, NavBar, HeroLayout, LearnFooter } from '../ui-components'
import { HomePageLayout } from '../components/HomePageLayout'

Amplify.configure(config)

const Home: NextPage = () => {
  const variant = useBreakpointValue({
    small: 'small',
    medium: 'default'
  });

  const meta = {
    title: "Learn Amplify",
    description:
      "Learn Amplify - Learn how to use Amplify to develop and deploy cloud-powered mobile and web apps.",
    url: "https://learn.amplify.aws/",
  };

  return (
    <>
       <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.title} key="og:title" />
        <meta name="description" content={meta.description} />
        <meta
          property="og:description"
          content={meta.description}
          key="og:description"
        />
        <meta property="og:url" content={meta.url} key="og:url" />
        <meta
          property="og:image"
          content="https://docs.amplify.aws/assets/ogp.jpg"
          key="og:image"
        />
        <meta
          property="description"
          content={meta.description}
          key="description"
        />
        <meta property="twitter:card" content="summary" key="twitter:card" />
        <meta
          property="twitter:title"
          content={meta.title}
          key="twitter:title"
        />
        <meta
          property="twitter:description"
          content={meta.description}
          key="twitter:description"
        />
        <meta
          property="twitter:image"
          content="https://docs.amplify.aws/assets/ogp.jpg"
          key="twitter:image"
        />
      </Head>
      <NavBar width={"100vw"}/>
      <main className='homepage-main'>
        <HomePageLayout />
      </main>
      <LearnFooter width={"100vw"}/>
    </>
  )
}

export default Home
