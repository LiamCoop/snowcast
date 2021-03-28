import React, { useState } from 'react';
import {
  Container,
  ButtonContainer,
  CurrentContainer,
  Text,
  Button,
  BButton,
  BtnText,
} from './style';
// button??
import { NorthAmerica, Europe, Asia, Other } from './tmp';

interface DDprops {
  setRegion: any;
  setShow: any;
}

const Dropdown = ({ setRegion, setShow }: DDprops) => {
  const [current, setCurrent] = useState<string[]>([]);
  return (
    <Container>
      <ButtonContainer>
        <Button onMouseEnter={() => setCurrent(NorthAmerica)}>
          North America
        </Button>
        <Button onMouseEnter={() => setCurrent(Europe)}>Europe</Button>
        <Button onMouseEnter={() => setCurrent(Asia)}>Asia</Button>
        <Button onMouseEnter={() => setCurrent(Other)}>Other</Button>
      </ButtonContainer>
      <CurrentContainer>
        {current.map((region: string) => (
          <Button
            key={region}
            onClick={() => {
              setRegion(region);
              setShow(false);
            }}
          >
            <BtnText>{region}</BtnText>
          </Button>
        ))}
      </CurrentContainer>
    </Container>
  );
};

export default Dropdown;
