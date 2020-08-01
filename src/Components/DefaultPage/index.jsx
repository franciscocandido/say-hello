import React from 'react';
import PropTypes from 'prop-types';

import { Content } from './styles';

import Menu from '../Menu';
import Footer from '../Footer';

function DefaultPage({ children }) {
  return (
    <>
      <Menu />
      <Content>
        {children}
      </Content>
      <Footer />
    </>
  );
}

DefaultPage.propTypes = {
  children: PropTypes.string.isRequired,
};

export default DefaultPage;
