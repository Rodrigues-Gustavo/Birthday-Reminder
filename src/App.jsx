import React, { useState } from 'react';
import styled from 'styled-components';
import List from './components/List/List';
import FakeApi from './FakeApi';
import Button from './components/Button/Button';
import Header from './components/Header/Header';

const Container = styled.div`
  width: 90vw;
  margin: 5rem 0;
  max-width: var(1170px);
  background: var(#fff);
  border-radius: var(0.25rem);
  padding: 1.5rem 2rem;
  box-shadow: var(0 5px 15px rgba(0, 0, 0, 0.4));
  background-color: #f0f0f0;
  border-radius: 0.5rem;
`;


const App = () => {
  const [ birthdayList, setBirthdayList ] = useState(FakeApi);


  return (
    <Container>
      <Header>
        Happy Birthday 🥳
        <br />
        {birthdayList.length} {birthdayList.length != 0 ? "aniversários" : "aniversário"} 
      </Header>
      <List birthdayList={birthdayList}/>
      <Button onClick={() => setBirthdayList([])}>Clear List</Button>
    </Container>
  )
}

export default App
