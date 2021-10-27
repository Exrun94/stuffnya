import React from 'react';
import {
  Container,
  Category,
  Date,
  Wrapper,
  Name,
  Content,
  ColorIndicator,
} from './NoteComponent.styles';

const NoteComponent = () => {
  return (
    <>
      <ColorIndicator>
        <Container>
          <Wrapper>
            <Category>My Category</Category>
            <Date>29/7/2021</Date>
          </Wrapper>
          <Name>DMARC</Name>
          <Content>
            _dmarc.domain.com v=DMARC1; p=none; rua=mailto:postmaster@domain.com
          </Content>
        </Container>
      </ColorIndicator>
      <ColorIndicator>
        <Container>
          <Wrapper>
            <Category>My Category</Category>
            <Date>29/7/2021</Date>
          </Wrapper>
          <Name>DMARC</Name>
          <Content>
            _dmarc.domain.com v=DMARC1; p=none; rua=mailto:postmaster@domain.com
          </Content>
        </Container>
      </ColorIndicator>
      <ColorIndicator>
        <Container>
          <Wrapper>
            <Category>My Category</Category>
            <Date>29/7/2021</Date>
          </Wrapper>
          <Name>DMARC</Name>
          <Content>
            _dmarc.domain.com v=DMARC1; p=none; rua=mailto:postmaster@domain.com
          </Content>
        </Container>
      </ColorIndicator>
    </>
  );
};

export default NoteComponent;
