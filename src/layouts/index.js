import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import Helmet from 'react-helmet';

import './index.css';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  height: '100%'
});

export default function TemplateWrapper({ children, data }) {
  const { meta } = data;
  const { title, description, author, authorUrl, published, twitter } = meta;
  return (
    <Container>
      <Helmet>
        <title>{title}</title>
        <link rel="author" href={authorUrl} />
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
        <meta name="twitter:description" content={description} />
        <meta name="og:title" content={title} />
        <meta name="og:type" content="article" />
        <meta name="author" content={author} />
        <meta name="article:author" content={author} />
        <meta name="article:published_time" content={published} />
        <meta name="twitter:creator" content={twitter} />
        <meta name="twitter:label1" content="Reading time" />
        <meta name="twitter:data1" content={`0 min read`} />
      </Helmet>
      {children()}
    </Container>
  );
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object
};

export const pageQuery = graphql`
  query LayoutQuery {
    meta:metaYaml {
      title
      description
      author
      authorUrl
      twitter
      published
    }
  }
`;
