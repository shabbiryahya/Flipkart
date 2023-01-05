import React from "react";
import { styled } from '@mui/material';
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	
	<Container>
		<Row>
		<Column>
			<Heading>About</Heading>
			<FooterLink href="#">About Us</FooterLink>
			<FooterLink href="#">Contact Us</FooterLink>
			<FooterLink href="#">Career</FooterLink>
            <FooterLink href="#">Flipkart Stories</FooterLink>
            <FooterLink href="#">Press</FooterLink>
            <FooterLink href="#">Flipkart wholeSale</FooterLink>
            <FooterLink href="#">Corporate</FooterLink>
		</Column>
		<Column>
			<Heading>HELP</Heading>
			<FooterLink href="#">Payments</FooterLink>
			<FooterLink href="#">Shipping</FooterLink>
			<FooterLink href="#">Cancellation</FooterLink>
			<FooterLink href="#">Return</FooterLink>
            <FooterLink href="#">FAQ</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">Uttar Pradesh</FooterLink>
			<FooterLink href="#">Ahemdabad</FooterLink>
			<FooterLink href="#">Indore</FooterLink>
			<FooterLink href="#">Mumbai</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
