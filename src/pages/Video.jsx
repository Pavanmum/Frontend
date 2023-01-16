import React from 'react'
import styled from 'styled-components'
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import ReplyIcon from '@mui/icons-material/Reply';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import Comments from '../components/Comments';
import Card from '../components/Card'


const Container = styled.div`
display: flex;
gap: 24px;
`

const Content = styled.div`
flex: 5;
`
const Recommendation = styled.div`
  flex: 2;
`

const VideoWrapper = styled.div``

const Title = styled.h1`
font-size: 18px;
font-weight: 400;
margin-top: 20px;
margin-bottom: 10px;
color:  ${({theme}) => theme.text};
`

const Details = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`

const Info = styled.span`
color:  ${({theme}) => theme.textSoft};
`

const Buttons = styled.div`
display: flex;
gap: 20px;
color: ${({theme}) => theme.text};
`

const Button = styled.div`
display:flex;
gap: 5px;
align-items: center;
cursor: pointer;
`
const Hr = styled.div`
  margin: 15px 0px;
  border: 0.5px solidcolor  ${({theme}) => theme.textSoft};
`
const Image = styled.img`
border-radius: 50%;
width: 50px;
height: 50px;
`  
const ChannelDetail = styled.div`
display: flex;
flex-direction: column;
color: ${({theme}) => theme.text};
`

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`
const ChannelInfo = styled.div`
  
`
const Subscribe = styled.button`
background-color: red;
height: max-content;
color: white;
border: none;
border-radius: 3px;
padding: 10px 20px;
font-weight: 500;
cursor: pointer;
`
const ChannelName = styled.span`
font-weight: 500;
`

const Channelcounter = styled.span`margin-top: 5px;
margin-bottom: 20px;
color:  ${({theme}) => theme.text};
font: 12px;`

const Description = styled.p`
font: 14px;
`

const Video = () => {
  return (
    <Container>
      <Content>
      <VideoWrapper>
      <iframe
      width="100%"
      src="https://www.youtube.com/embed/UhEo9lRuKVI"
      height="720"
      title="Youtube video Player"
      framebroder="0"
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
      >
      </iframe>
      </VideoWrapper>
      <Title>
        Test Video
      </Title>
      <Details>
        <Info>
          7,3M views Jan 22,2022
        </Info>
        <Buttons>
        <Button><ThumbUpOffAltIcon/>Like</Button>
        <Button><ThumbDownOffAltIcon/>Dislike</Button>
        <Button><ReplyIcon/>Share</Button>
        <Button><SaveAltIcon/>Save</Button>
        </Buttons>
      </Details>
      <Hr/>
      <Channel>
        <ChannelInfo>
          <ChannelDetail>
            <Image src="https://th.bing.com/th/id/OIP.P3KgKGTYFaOEdgwI8Y0s6gAAAA?w=115&h=180&c=7&r=0&o=5&pid=1.7"/>
            <ChannelName>PABLO ESCOBAR</ChannelName>
            <Channelcounter>242 M Subscriber</Channelcounter>
            <Description>
            Escobar eclipses just about every drug kingpin in history.
            He started from nothing and in as little as a couple of decades,
            became one of the most powerful men in the world. Along the way, 
            he did some truly staggering things:
            </Description>
          </ChannelDetail>
        </ChannelInfo>
        <Subscribe>SUBSCRIBE</Subscribe>
      </Channel>
      <Hr/>
      <Comments/>
      </Content>
      <Recommendation>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        
        </Recommendation>
    </Container>
  )
}

export default Video
