import styled from 'styled-components'


export const AlertWrapper = styled.div`
	position: absolute;
	z-index: 10;
	top: 0;
	width: 100vw;
	& > * + * {
		margin-top: 8px;
	}
`