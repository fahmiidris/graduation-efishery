import * as React from 'react';
import clsx from 'clsx';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const initialProps = await NextDocument.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html
        lang="en"
        className={clsx('scroll-smooth [--scroll-mt:9.875rem] lg:[--scroll-mt:6.3125rem]')}
      >
        <Head></Head>
        <body
          className={clsx('font-sans text-slate-500 antialiased', {
            'bg-white': true,
          })}
        >
          <Main />
          <NextScript />
          <script></script>
        </body>
      </Html>
    );
  }
}
