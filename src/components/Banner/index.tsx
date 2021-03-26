import React from 'react';
import { Container, Text } from './style';

interface BannerProps {
  pinCount: number;
  onClick: () => void;
}

const Banner = ({ pinCount, onClick }: BannerProps) => (
  <Container onClick={onClick}>
    <Text>Showing {pinCount} pins</Text>
    <Text>Click to focus</Text>
  </Container>
);

export default Banner;
