import React from 'react';
import { Box, Container, Flex, Text, Heading } from 'theme-ui';
import { Link } from 'components/link';
import BlockTitle from 'components/block-title';
import Accordion from 'components/accordion/accordion';

const accordionData = [
  {
    isExpanded: false,
    title: "What's the difference between LVN and LEVIN?",
    contents: (
      <div>
        LVN was our native token, airdropped to users on the xDai chain. Later we introduced - LEVIN -
        token that currently powers the Levin ecosystem. You can do with them as you please.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Was Levin deployed on Mainnet?',
    contents: (
      <div>
        No. Levin was originally deployed to xDai - Layer 2 solution.
        
        Utilizing the Omnibridge we bridged LEVIN from xDai to Mainnet.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "What's the relation between Levin & RealT?",
    contents: (
      <div>
        Levin (Levinswap) and RealT together with their partnership allowed RealT token users to provide LP, farm, stake & trade
        with their assets, all whilst utilizing xDai's fast & inexpensive blockchain.
      </div>
    ),
  },
];

const FAQ = () => {
  return (
    <Box as="section" id="faq">
      <Container sx={styles.container}>
        <BlockTitle
          title="Frequently Asked Questions"
        />
        <Flex sx={styles.flex}>
          <Box sx={styles.faqWrapper}>
            <Accordion items={accordionData} />
          </Box>
          <Box sx={styles.content}>
            <Heading as="h3">
              Do you have any quesiton? <br />
              Join our Discord!
            </Heading>
            <Text as="p">
              If your question is not list here, please feel free to reach out to us.
            </Text>
            <Link sx={styles.askButton} path="#" target="_blank" href="https://discord.gg/3HnaqWQRrN">
              Join Server
            </Link>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default FAQ;

const styles = {
  container: {
    position: 'relative',
    top: '100px',
    paddingBottom: '100px',
  },
  flex: {
    flexWrap: 'wrap',
    flexDirection: ['column', null, null, null, null, 'row-reverse'],
    pb: ['70px', null, null, null, '90px', null, '130px'],
  },
  content: {
    flex: ['0 0 100%', null, null, null, '0 0 33.333%'],
    maxWidth: ['100%', null, null, '450px', '100%'],
    mx: ['auto', null, null, null, '0'],
    mb: ['0px', null, null, null, '0'],
    textAlign: ['center', null, null, null, null, 'left'],
    mt: ['40px', null, null, null, null, '0'],
    h3: {
      fontSize: ['23px', null, null, null, '24px'],
      lineHeight: [1.5, null, null, null, 1.67],
      color: 'black',
      fontWeight: 700,
      letterSpacing: '-1.5px',
      mt: '-5px',
      pr: ['0', null, null, null, null, '30px'],
    },
    p: {
      fontSize: '16px',
      lineHeight: 1.87,
      color: '#343D48',
      opacity: 0.7,
      mt: '10px',
      pr: ['0', null, null, null, null, '80px'],
    },
  },
  askButton: {
    display: 'inline-block',
    verticalAlign: 'middle',
    backgroundColor: 'secondary',
    color: 'text_white',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 700,
    p: '6.5px 19px',
    letterSpacing: '-0.16px',
    mt: '25px',
    transition: 'all 500ms ease',
    '&:hover': {
      opacity: 0.8,
    },
  },
  faqWrapper: {
    flex: ['0 0 100%', null, null, null, '0 0 66.666%'],
  },
};
