import React from 'react';
import { Box, Text, Heading, Image } from 'theme-ui';
import arrowAngle from 'assets/arrow-angle.svg';

const ServiceCard_2 = ({ image, text, heading, path }) => {
  return (
    <Box sx={styles.serviceCard}>
      <Box sx={styles.content}>
        <Heading as="h3">{heading}</Heading>
        <Text as="p">{text}</Text>
      </Box>
    </Box>
  );
};

export default ServiceCard_2;

const styles = {
  serviceCard: {
    display: 'flex',
    flexDirection: ['column', null, null, 'row'],
    textAlign: 'center',
    justifyContent: 'space-evenly',
  },
  content: {
    width: '225px',
    height: '200px',
    maxWidth: '225px',
    maxHeight: '200px',
    //border: '2px solid #6538e0',
    //borderRadius: '25px',
    pt: '30px',
    pl: '30px',
    pr: '30px',
    pb: '30px',
    mt: ["10px"],
    h3: {
      color: '#161728',
      fontWeight: 700,
      fontSize: '48px',
      lineHeight: 1,
    },
    p: {
      fontSize: '18px',
      lineHeight: 1.87,
      color: '#161728',
      fontWeight: 300,
      mt: '20px',
    },
  },
};
