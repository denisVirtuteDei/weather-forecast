import styled from 'styled-components';

export const ImgContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100vh;
    background-size: cover;
    background-filter: blur(5px);
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${props => props.img});

    .centered-box {
        padding: 0;
    }

`