import styled from 'styled-components';

export const Box = styled.div`
padding: 80px 0;
background: #212121;
margin-top:30px;
bottom: 0;
width: 100%;


@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	max-width: 1100px;
	margin: 0 auto;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;

`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(100px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 5px;
font-size: 12px;
text-decoration: none;
// margin-top:-15px;

&:hover {
	color: blue;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 15px;
color: #878787;
margin-bottom: 20px;
font-weight: bold;
`;
