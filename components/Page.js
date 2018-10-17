import React, { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

import Meta from './Meta'

const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#5f5f5f',
  orange: "#DF9D81",
  lightgrey: '#E1E1E1',
  offWhite: '#FDFDFD',
  maxWidth: '1000px',
  minWidth: '800px',
  bs: '0px 0px 20px 0px rgba(0,0,0,0.75)',
  lg: 'linear-gradient(to bottom, #db7a78 0%, #f98b6f 100%)'
}

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
    height: 100%;
    display: grid;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    height: 100%;
    display: grid;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
    line-height: 2;
    background: ${theme.lg};
  }
  a {
    text-decoration: none;
    color: ${theme.black}
  }
`

const StylePage = styled.div`
  color: ${props => props.theme.black};
`
const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  min-width: ${props => props.theme.minWidth};
  margin: auto;
  box-shadow: ${props => props.theme.bs};
  background: ${props => props.theme.offWhite};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 600px) {
    min-width:100%;
    height: 100%;
  }
`

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <GlobalStyles />
          <Meta />
          <StylePage>
            <Inner>
              { this.props.children }
            </Inner>
          </StylePage>
        </div>
      </ThemeProvider>
    );
  }
}

export default Page;