import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 90vw;
  margin: 5rem 0;
  max-width: var(1170px);
  background: var(#fff);
  border-radius: var(0.25rem);
  padding: 1.5rem 2rem;
  box-shadow: var(0 5px 15px rgba(0, 0, 0, 0.4));
  background-color: #ddff00;
`;

const App = () => {
  return (
    <Container>
      <h1>Do not forget</h1>
      <h3>1 birthday today</h3>
      <div>birthday List</div>
      <button>Clear List</button>
    </Container>
  )
}

export default App
