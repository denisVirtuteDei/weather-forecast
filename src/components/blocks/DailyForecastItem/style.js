import styled from 'styled-components'

export const CenteredDiv = styled.div`
	margin: 10px 0; 
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	div {
		text-align: center;  
	}
`

export const TodayDiv = styled.div`
	margin-right: 10px; 
	display: grid;
	grid-template-columns: 1fr auto;
	grid-gap: 5px;
	align-items: center;
	font-size: 2rem;
   
	.icon {
		grid-column-start: span 1;
		grid-row-start: span 2;
		justify-self: flex-end;
		width: 110px;
		height: 110px;
	}
`

export const WeatherIcon = styled.img.attrs(props => ({
	src: props.src,
}))`
	width: 100px;
	height: 100px;
	alt: ${props => props.alt};
`