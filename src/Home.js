import React from 'react'
import styled from 'styled-components'
export  const Home = () => {
  return (
    <Wrapper className='test'>
        <h1>Home</h1>
        <h1>what error</h1>
    </Wrapper>
  )
}
const Wrapper =styled.section`
background-color: ${({theme})=>theme.colors.bg};
width:20rem;
height:20rem;
`;
  