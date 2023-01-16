import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: calc(100vh - 56px);
flex-direction:column;
color: ${({ theme }) => theme.text};
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: ${({ theme }) => theme.bgLighter};
    border: 1px solid ${({ theme }) => theme.soft};
    padding: 20px 50px;
    gap: 10px;
`
const Tittle = styled.h1`
font-size: 24px;
`
const SubTittle = styled.h2`
font-size: 20px;
font-weight: 200%;
`
const Input = styled.input`
border: 1px solid ${({ theme }) => theme.soft};
color: ${({ theme }) => theme.textSoft};
border-radius: 3px;
width: 100%;
padding: 10px;
background-color: transparent;

`
const Button = styled.button`
border-radius: 3px;
border: none;
padding: 10px 20px;
font-weight: 500;
cursor: pointer;
background-color: ${({ theme }) => theme.soft};
color: ${({ theme }) => theme.textSoft};
`
const More = styled.div`
display: flex;
margin-top: 10px;
font-size: 10px;
color: ${({ theme }) => theme.textSoft};;
`
const Links = styled.div`
margin-left: 50px;
`
const Link = styled.span`
margin-left: 30px;
`


const SignIn = () => {
  return (
    <Container>
        <Wrapper>
            <Tittle>Sign In</Tittle>
            <SubTittle>to continue to Pabalo</SubTittle>
            <Input placeholder="username" />
            <Input type="password" placeholder="password" />
            <Button>Sign in</Button>
            <Input placeholder="username" />
            <Input placeholder="Email" />
            <Input type="password" placeholder="password" />
            <Button>Sign up</Button>
        </Wrapper>
        <More>
            English(USA)
            <Links>
                <Link>Help</Link>
                <Link>Privacy</Link>
                <Link>Terms</Link>
            </Links>
        </More>
    </Container>
  )
}
  
export default SignIn
