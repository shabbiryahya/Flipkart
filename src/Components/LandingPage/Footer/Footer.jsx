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
            <FooterLink href="#">Report Infridgement</FooterLink>
		</Column>
		<Column>
			<Heading>POLICY</Heading>
			<FooterLink href="#">Return Policy</FooterLink>
			<FooterLink href="#">Terms Of Use</FooterLink>
			<FooterLink href="#">Security</FooterLink>
			<FooterLink href="#">Privacy</FooterLink>
            <FooterLink href="#">Site Map</FooterLink>
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
        <Column>
			<Heading>Mail Us</Heading>
			<FooterLink href="#">Flipkart Internet Private Limited,</FooterLink>
			<FooterLink href="#">Buildings Alyssa, Begonia &</FooterLink>
			<FooterLink href="#">Clove Embassy Tech Village,</FooterLink>
			<FooterLink href="#">Bengaluru, 560103</FooterLink>
            <FooterLink href="#">Karnataka, India</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
