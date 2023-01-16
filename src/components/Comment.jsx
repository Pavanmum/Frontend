import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    gap: 10px;
    margin: 30px 0px;
`

const Details = styled.div`
  display: flex;
  flex-direction: column ;
  gap: 12px;
  color: ${({ theme }) => theme.textSoft};
`
const ChannelImage = styled.img`
height: 50px;
width: 50px;
border-radius: 50%;
`
const Title = styled.span`
font-stretch: 13px;
font-weight: 500;
`
const Detail = styled.h2`
font-size: 14px;
`
const Info = styled.span`
font-size: 12px;
font-weight: 400;
color: ${({ theme }) => theme.textSoft};
margin-left: 5px;
`

const Comment = () => {
  return (
    <Container>
        <ChannelImage src='https://th.bing.com/th/id/OIP.P3KgKGTYFaOEdgwI8Y0s6gAAAA?w=115&h=180&c=7&r=0&o=5&pid=1.7'/>
       <Details>
          <Title>the king of cocaine<Info> 3 days Ago</Info></Title>
          <Detail>Pablo Emilio Escobar Gaviria,
          milio Escobar Gaviria, akjsk   dj sj aks
          sdlkdl  sdkdpod;ldkl
          </Detail>
        </Details>
    </Container>
  )
}

export default Comment
