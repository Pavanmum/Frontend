import styled from 'styled-components'
import Comment from './Comment'


const Container = styled.div``

const Avatar = styled.img`
border-radius: 50%;
width: 50px;
height: 50px;
`

const Input = styled.input`
border: none;
border-bottom: 1px solid ${({theme}) => theme.soft};
outline: none;
padding: 5px;
width: 100px;
`

const NewComment = styled.div``

const Comments = () => {
  return (
    <Container>
        <NewComment>
            <Avatar src="https://th.bing.com/th/id/OIP.P3KgKGTYFaOEdgwI8Y0s6gAAAA?w=115&h=180&c=7&r=0&o=5&pid=1.7" />

            <Input placeholder="Add a Comment......" />
        </NewComment>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
    </Container>
  )
}

export default Comments
