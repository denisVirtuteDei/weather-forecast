import styled from 'styled-components';

export const CenteredDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    div {
        text-align: center;  
    }
`

export const TodayDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5px;
    grid-auto-rows: (50px, auto);
    align-items: center;
    justify-content: center;
    
    .icon {
        grid-column-start: span 1;
        grid-row-start: span 2;
        align-self: center;
        justify-self: end;
    }
`

export const WeatherIcon = styled.img.attrs((props) => ({
    src: `http://openweathermap.org/img/wn/${props.src}@2x.png`
}))`
    alt: ${props => props.alt};
`