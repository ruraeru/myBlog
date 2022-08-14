import React from 'react';
import Header from './components/Header';
import Contents from './components/Contents';
import TagHeader from './components/TagHeader';
import styled from 'styled-components';

function App() {
  return (
    <>
      <Header />
      <TagHeader />
      <Contents />
      <Contents />
      <Footer>
        @ruraeru, Built with React
      </Footer>
    </>
  );
}

const Footer = styled.footer`
   display: flex;
   justify-content: center;
   align-items: center;
   margin-top: 56px;
   height: 112px;
   background-color: rgb(240, 240, 240);
`;

export default App;
