import React from 'react';
import Head from "next/head";
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Services from 'sections/services';
import Core from 'sections/core';
import CallToAction from 'sections/call-to-action';
import Featured from 'sections/featured';
import FAQ from 'sections/faq';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Levin" />
          <Banner />
          <Services />
          <Core />
          <CallToAction />
          <Featured />
          <FAQ />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
