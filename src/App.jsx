import React, { useState } from 'react';
import styled from 'styled-components';
import List from './components/List/List';
import FakeApi from './FakeApi';
import Button from './components/Button/Button';
import Header from './components/Header/Header';

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  margin: 5rem 0;
  max-width: 1170px;
  background: #fff;
  border-radius: var(0.25rem);
  padding: 1.5rem 2rem;
  box-shadow: var(0 5px 15px rgba(0, 0, 0, 0.4));
  background-color: #f0f0f0;
  border-radius: 0.5rem;
`;

const App = () => {
  const [ birthdayList, setBirthdayList ] = useState(FakeApi);


  return (
    <Main>
      <Container>
        <Header>
          Happy Birthday 🥳
          <br />
          {birthdayList.length} {birthdayList.length != 0 ? "aniversários" : "aniversário"} 
        </Header>
        <List birthdayList={birthdayList}/>
        <Button onClick={() => setBirthdayList([])}>Clear</Button>
      </Container>
    </Main>
  )
}

export default App
