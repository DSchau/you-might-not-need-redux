import React from 'react';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import facepaint from 'facepaint'

import { Footer } from '../components';

const mq = facepaint([
  '@media(min-width: 400px)',
  '@media(min-width: 768px)',
  '@media(min-width: 1024px)'
]);

console.log(mq({
    fontSize: ['1.5rem', '2rem', '3rem', '4rem']
  }));

const Container = styled.main({
  flex: '1 1 auto',
  position: 'relative',
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const Title = styled.h1({
  color: '#333',
  fontWeight: 700,
}, mq({
  fontSize: ['1.5rem', '2rem', '3rem', '4rem']
}));

const Subtitle = styled.h2({
  color: '#666',
  fontWeight: 400,
  textAlign: 'center'
}, mq({
  fontSize: ['1.2rem', '1.5rem', '1.75rem', '2rem']
}));

const Link = styled.a({
  color: 'inherit',
  textDecoration: 'none',
  textDecorationSkip: 'ink',
  textDecorationSkipInk: 'auto',
  transition: '175ms ease-in-out',
  ':hover': {
    textDecoration: 'underline'
  }
});

const TweetsWithLinks = ({ list, title }) => {
  const split = title.split(' ');
  return (
    <React.Fragment>
      {
        split
          .map((word, index) => {
            const key = `${word}-${index}`;
            if (list[index]) {
              return <Link key={key} href={list[index].node.url} target="_blank" rel="noopener">{word}{` `}</Link>;
            }
            return <span key={key}>{word}{` `}</span>;
          })
      }
    </React.Fragment>
  );
};

export default function Index({ data }) {
  const {
    allSitesYaml,
    tweetsFor: { edges: tweetsFor },
    tweetsAgainst: { edges: tweetsAgainst }
  } = data;
  const screenshot = allSitesYaml.edges[0].node.childScreenshot.screenshotFile.childImageSharp.resize.src;
  return (
    <React.Fragment>
      <Helmet />
      <Container>
        <Title>
          <TweetsWithLinks list={tweetsAgainst} title="You might not need Redux" />
        </Title>
        <Subtitle>
          <TweetsWithLinks list={tweetsFor} title="Or maybe you do... the fuck does anyone know anyways"/>
        </Subtitle>
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    tweetsFor:allForYaml {
      edges {
        node {
          url
        }
      }
    }
    tweetsAgainst:allAgainstYaml {
      edges {
        node {
          url
        }
      }
    }

    allSitesYaml {
      edges {
        node {
          childScreenshot {
            screenshotFile {
              childImageSharp {
                resize(height: 1200, width: 1200) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;
