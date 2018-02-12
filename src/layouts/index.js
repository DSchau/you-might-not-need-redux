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

const TemplateWrapper = ({ children }) => (
  <Container>
    <Helmet
      title="You Might Not Need Redux"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    {children()}
  </Container>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
