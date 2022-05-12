import '@/css/fonts.css';
import '@/css/main.css';

import * as React from 'react';
import Head from 'next/head';

import { Title } from '@/components/title';
import { AppLayout } from '@/layouts/app-layout';

const defaultMeta = {
  title: 'My Graduation',
  description: 'My Graduation - eFishery Academy Graduation Presentation.',
  url: 'https://graduation-efishery.fahmiidris.dev',
  image: 'https://graduation-efishery.fahmiidris.dev/images/default-social-image.jpg',
  type: 'website',
  robots: 'follow, index',
};

const MyApp = ({ Component, pageProps, router }) => {
  const customMeta = Component.Props?.meta || {};
  const meta = { ...defaultMeta, ...customMeta };

  return (
    <>
      <Title suffix="Graduation eFishery Academy">{meta.title}</Title>
      <Head>
        <meta name="robots" content={meta.robots} />
        <meta name="description" content={meta.description} />

        {/* Open Graph */}
        <meta name="title" property="og:title" content={meta.title} />
        <meta name="description" property="og:description" content={meta.description} />
        <meta name="url" property="og:url" content={`${meta.url}${router.asPath}`} />
        <meta name="type" property="og:type" content={meta.type} />
        <meta name="site_name" property="og:site_name" content={meta.title} />
        <meta name="image" property="og:image" content={meta.image} />

        {/* Twitter */}
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@FahmiIdrisA" />
        <meta name="twitter:creator" content="@FahmiIdrisA" />

        <link rel="canonical" href={`${meta.url}${router.asPath}`} />

        {meta.date && (
          <>
            <meta name="author" property="article:author" content="Fahmi Idris" />
            <meta name="published_time" property="article:published_time" content={meta.date} />
            <meta name="publish_date" property="og:publish_date" content={meta.date} />
          </>
        )}
      </Head>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
};

export default MyApp;
