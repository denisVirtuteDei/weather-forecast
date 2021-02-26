import styled from 'styled-components';

export const ImgContainer = styled.div`
height: 100vh;
background-size: cover;
background-filter: blur(5px);
background-position: center;
background-repeat: no-repeat;
background-image: url(${props => props.img});
`