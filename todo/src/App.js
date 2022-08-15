import * as React from 'react';
// import React from 'react';
import GlobalStyle from './GlobalStyles';
import styled from 'styled-components';
import Layout from './layout/Layout';

function App(props) {
  return (
    <div>
      <React.Fragment>
        <GlobalStyles />
        <Layout />
      </React.Fragment>
    </div>
  );
}

export default App;
