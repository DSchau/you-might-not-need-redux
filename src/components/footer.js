import React from 'react';
import styled from 'react-emotion';

const FooterContainer = styled.footer({
  display: 'flex',
  flex: '0 0 auto',
  padding: '0.5rem',
  ':hover p': {
    color: 'black'
  }
});

const Copyright = styled.p({
  color: 'white',
  margin: 'auto',
  padding: 0,
  fontSize: 12,
  transition: '175ms ease-in-out',
});

const Link = styled.a({
  color: 'inherit',
  textDecorationSkip: 'ink',
  textDecorationSkipInk: 'auto'
});

export function Footer() {
  return (
    <FooterContainer>
      <Copyright>Made because reasons by <Link href="https://dustinschau.com" target="_blank" rel="noopener">Dustin Schau</Link></Copyright>
    </FooterContainer>
  );
}
