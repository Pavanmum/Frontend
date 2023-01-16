import React from 'react'
import styled from 'styled-components'
import Pavan from '../images/logo.png'
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/ExploreSharp';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from 'react-router-dom';

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
`;
const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
    display  :flex ;
    align-items: center;
    gap: 5px;
    font-weight: bold;
    margin-bottom: 25px ;
`;

const Img = styled.img`
    height: 25px;
`
const Items = styled.div`
    display: flex;
    cursor: pointer;
    gap: 20px;
    align-items: center;
    padding: 7.5px 0px;
    &:hover{
        background-color: ${({theme})=>theme.soft};
    }
`
  
const Hr = styled.hr`
    margin: 15px 0px;
    border: 0.5px solid ${({theme}) => theme.soft};
`
const Login = styled.div``

const Button = styled.button`
padding:5px 15px;
background-color: transparent;
color: #3ea6ff;
border: 1px solid;
border-radius: 3pz;
font-weight: 500;
margin-top: 10px;
cursor: pointer;
display: flex;
align-items: center;
gap: 5px;
`

const Menu = ( { darkMode, setDarkMode }) => {
  return (
    <Container>
    <Wrapper>
        <Link to="/"  style={{textDecoration:"none" , color:"inherit"}}>
        <Logo>
            <Img src={Pavan}/>
            NARCOS
            </Logo>
            </Link>
            <Items>
                <HomeIcon/>
                Home
            </Items>
            <Items>
                <ExploreIcon/>
                Explore
            </Items>
            <Items>
                <SubscriptionsOutlinedIcon/>
                Subscriptions
            </Items>
            <Hr/>
            <Items>
                <LibraryMusicIcon/>
                Library
            </Items>
            <Items>
                <HistoryIcon/>
                History
            </Items>
            <Hr/>
            <Login>
                <Link to="signin" style={{textDecoration:"none"}}>
            Sing in to like video comment,and subscribe
            <Button>
                <AccountCircleOutlinedIcon/>SIGN IN
            </Button>
                </Link>
            </Login>
            <Hr/>
            <Items>
                <VideoLibraryOutlinedIcon/>
                Music
            </Items>
            <Items>
                <SportsBasketballIcon/>
                Sports
            </Items>
            <Items>
                <SportsEsportsOutlinedIcon/>
                Gaming
            </Items>
            <Items>
                <MovieCreationOutlinedIcon/>
                Movies
            </Items>
            <Items>
                <LiveTvOutlinedIcon/>
                Live
            </Items>
            <Hr/>
            <Items>
                <ArticleOutlinedIcon/>
                News
            </Items>
            <Items>
                <SettingsOutlinedIcon/>
                Setting
            </Items>
            <Items>
                <FlagOutlinedIcon/>
                Report
            </Items>
            <Items>
                <HelpOutlineOutlinedIcon/>
                Help
            </Items>
            <Items onClick={() => setDarkMode(!darkMode)}>
                <SettingsBrightnessOutlinedIcon/>
                {darkMode ? "Light" : "Dark"} Mode
            </Items>

        </Wrapper>
    </Container>
  )
}

export default Menu
