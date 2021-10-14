import React, { useState } from 'react';
import { Box, Container, Button } from 'theme-ui';
import { keyframes } from '@emotion/core';
import BlockTitle from 'components/block-title';
import Image from 'components/image';
import { FaHandHoldingUsd } from 'react-icons/fa';
import { BiBitcoin } from 'react-icons/bi';
import { GiWheat, GiMoneyStack } from 'react-icons/gi'
import tabImage1 from 'assets/tab-image-1.png';
import dotPattern from 'assets/dot-pattern.svg';

const Featured = () => {
  const [tab, setTab] = useState({
    active: 'swap',
  });

  const handleTab = (tab) => {
    if (tab === 'swap') {
      setTab({
        ...tab,
        active: 'swap',
      });
    }
    if (tab === 'farm') {
      setTab({
        ...tab,
        active: 'farm',
      });
    }
    if (tab === 'stake') {
      setTab({
        ...tab,
        active: 'stake',
      });
    }
    if (tab === 'lp') {
      setTab({
        ...tab,
        active: 'lp',
      });
    }
  };
  return (
    <Box as="section" id="featured" sx={styles.featured}>
      <Container sx={styles.container}>
        <BlockTitle
          title="All-in-One Dashboard"
          text="Easily manage your assets"
        />
        <Box sx={styles.tabButtonTopWrapper}>
          <Box sx={styles.tabButtonWrapper}>
            <Button
              onClick={() => handleTab('swap')}
              className={`${tab.active === 'swap' ? 'active' : ''}`}
            >
              <BiBitcoin />
              Swap
            </Button>
            <Button
              onClick={() => handleTab('lp')}
              className={`${tab.active === 'lp' ? 'active' : ''}`}
            >
              <GiMoneyStack />
              Provide LP
            </Button>
            <Button
              onClick={() => handleTab('farm')}
              className={`${tab.active === 'farm' ? 'active' : ''}`}
            >
              <GiWheat />
              Farm
            </Button>
            <Button
              onClick={() => handleTab('stake')}
              className={`${tab.active === 'stake' ? 'active' : ''}`}
            >
              <FaHandHoldingUsd />
              Stake
            </Button>
          </Box>
        </Box>
        <Box sx={styles.tabContent}>
          {tab.active === 'swap' && (
            <Image src={tabImage1} alt="tab image" className="tabImage" />
          )}
          {tab.active === 'farm' && (
            <Image src={tabImage1} alt="tab image" className="tabImage" />
          )}
          {tab.active === 'stake' && (
            <Image src={tabImage1} alt="tab image" className="tabImage" />
          )}
          {tab.active === 'lp' && (
            <Image src={tabImage1} alt="tab image" className="tabImage" />
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Featured;
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const styles = {
  featured: {
    backgroundColor: '#F9FAFC',
  },
  container: {
    position: 'relative',
    padding: '0px',
  },
  tabButtonTopWrapper: {
    overflowY: ['hidden', null, null, null, null, 'inherit'],
    overflowX: ['auto', null, null, null, null, 'inherit'],
  },
  tabButtonWrapper: {
    width: ['700px', null, null, null, null, '100%'],
    mx: ['auto', null, null, null, null, '0'],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottom: '1px solid rgba(1,7,13,.1)',
    mb: '35px',
    button: {
      display: 'flex',
      alignItems: 'center',
      pb: ['15px', null, null, null, '35px'],
      px: ['15px', null, null, null, '30px'],
      flexShrink: '0',
      border: 0,
      backgroundColor: 'rgba(0,0,0,0)',
      color: '#0F2137',
      fontSize: ['14px', null, null, null, '18px'],
      fontWeight: 500,
      lineHeight: 1,
      position: 'relative',
      transition: 'all 500ms ease',
      svg: {
        fontSize: ['18px', null, null, null, '30px'],
        color: '#ADBDD0',
        opacity: 0.7,
        mr: '15px',
        transition: 'all 500ms ease',
      },
      '&:hover, &.active': {
        backgroundColor: 'rgba(0,0,0,0)',
        color: '#0F2137',
        svg: {
          color: '#0F2137',
          opacity: 1,
        },
        '&::before': {
          transform: 'scale(1,1)',
        },
      },
      '&::before': {
        content: "''",
        position: 'absolute',
        bottom: '-2px',
        backgroundColor: '#0F2137',
        left: 0,
        width: '100%',
        height: '3px',
        transform: 'scale(0,1)',
        transition: 'transform 500ms ease',
      },
    },
  },
  tabContent: {
    minHeight: ['190px', null, '300px', '385px', null, '600px'],
    position: 'relative',
    '&::before': {
      content: "''",
      width: '302px',
      height: '347px',
      backgroundImage: `url(${dotPattern})`,
      position: 'absolute',
      bottom: '-30px',
      right: '-40px',
      display: ['none', null, null, null, null, 'block'],
    },
    '.tabImage': {
      position: 'relative',
      animation: `${fadeIn} 0.8s linear`,
    },
  },
};
