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
        <Button
          onClick={() =>
            setCurrent(current === NorthAmerica ? [] : NorthAmerica)
          }
        >
          North America
        </Button>
        <Button onClick={() => setCurrent(current === Europe ? [] : Europe)}>
          Europe
        </Button>
        <Button onClick={() => setCurrent(current === Asia ? [] : Asia)}>
          Asia
        </Button>
        <Button onClick={() => setCurrent(current === Other ? [] : Other)}>
          Other
        </Button>
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
