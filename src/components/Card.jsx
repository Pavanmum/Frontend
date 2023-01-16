
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
width:  ${(props)=>props.type !== "sm" && "360px"};
margin-bottom: ${(props)=>props.type === "sm" ? "10px" : "45px"};
cursor: pointer;
display: ${(props)=>props.type === "sm" && "flex"};
gap: 10 px;
&:hover{
        background-color: ${({theme})=>theme.soft};
    }
`  
const Img = styled.img`
width: 100%;
height:  ${(props)=>props.type === "sm" ? "190px" : "202px"};
background-color: #999;
flex: 1;
`
const Details = styled.div`
  display: flex;
  margin-top:  ${(props)=>props.type !== "sm" && "16px"};
  gap: 12px;
`
const ChannelImage = styled.img`
width  : 36px;
height: 36px;
border-radius: 50%;
background-color: #999;
display: ${(props)=>props.type === "sm" && "none"};
`
const Texts = styled.div``
const Title = styled.h1`
font-size: 16px;
font-weight: 500;
color: ${({ theme }) => theme.text};
`
const ChannelName = styled.h2`
font-size: 14px;
color: ${({ theme }) => theme.textSoft};
margin: 9px 0px;
`
const Info = styled.div`
font-size: 14px;
color: ${({ theme }) => theme.textSoft};
`

const Card = ({type}) => {
  return (
    <Link to="/video/test"  style={{textDecoration:"none"}}>
      <Container type={type}> 
      <Img type={type} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Pablo_Escobar_Mug.jpg/220px-Pablo_Escobar_Mug.jpg "/>
      <Details type={type}>
        <ChannelImage  type={type} src='https://th.bing.com/th/id/OIP.P3KgKGTYFaOEdgwI8Y0s6gAAAA?w=115&h=180&c=7&r=0&o=5&pid=1.7'/>
        <Texts>
          <Title>the king of cocaine</Title>
          <ChannelName>Pablo Emilio Escobar Gaviria</ChannelName>
          <Info>Member of the Chamber of Representatives for Medellin</Info>
        </Texts>
      </Details>
    </Container>
    </Link>
  )
}


export default Card
