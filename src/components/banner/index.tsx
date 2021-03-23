import React from 'react';
import { Container, Text } from './style';

interface BannerProps {
  pinCount: number;
}

const Banner = ({ pinCount }: BannerProps) => (
  <Container>
    <Text>Now displaying {pinCount} locations</Text>
  </Container>
);

export default Banner;
