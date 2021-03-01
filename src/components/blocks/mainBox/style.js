import styled from 'styled-components';

export const containerStyle = {
    maxWidth: 'none',
    padding: 0
}

export const ImgContainer = styled.div`
    height: 100vh;
    background-size: cover;
    background-filter: blur(5px);
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${props => props.img});
`