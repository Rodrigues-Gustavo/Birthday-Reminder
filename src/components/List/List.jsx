import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 0.75rem;
  margin-bottom: 1.5rem;
  align-items: center;
`;

const PersonPicture = styled.img`
    width: 75px;
    height: 75px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const PersonInfo = styled.div`
    font-size: 0.875rem;
`;


  


const List = ({ birthdayList }) => {
  return (
    <>
        {birthdayList.map((person) => {
            const { id, name, age, image } = person

            return (
                <Container key={id}>
                    <PersonPicture src={image} alt={name} />
                    <PersonInfo>{name}, {age} years</PersonInfo>
                </Container>
            )
        })}
    </>
  )
}

export default List