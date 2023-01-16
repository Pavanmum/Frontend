import styled from 'styled-components'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from 'react-router-dom';


const Container = styled.div`
position: sticky;
top: 0;
background-color: ${({ theme }) => theme.bgLighter};
height: 56px;

`

const Wrapper = styled.div`
display: flex;
align-items: center;
height: 100%;
padding: 0px 20px ;
justify-content: flex-end;
position: relative;
`
const Search = styled.div`
position: absolute;
left: 0px;
right: 0px;
margin: auto;
width: 40%;
display: flex;
align-items: center;
justify-content: space-between;
padding: 5px;
border: 1px solid #ccc;
border-radius: 3px;
`

const Input = styled.input`
border:none;
background-color: transparent;
outline: none;
color: ${({ theme }) => theme.text};
`

const Button = styled.button`
padding:5px 15px;
background-color: transparent;
color: #3ea6ff;
border: 1px solid;
border-radius: 3pz;
font-weight: 500;
cursor: pointer;
display: flex;
align-items: center;
gap: 5px;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder='Search' />
          <SearchIcon/>
        </Search>
        <Link to="signin" style={{textDecoration:"none"}}>
        <Button>
              <AccountCircleOutlinedIcon/>SIGN IN
          </Button>
          </Link>
      </Wrapper>
    </Container>
  )
}

export default Navbar
