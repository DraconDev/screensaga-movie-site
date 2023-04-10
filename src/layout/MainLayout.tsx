import React, { ReactNode } from "react";
import NavBar from "../components/NavBar";
import Container from "@mui/material/Container";

interface MainProps {
	children: ReactNode;
}

const main = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<NavBar></NavBar>
			<Container maxWidth="lg">{children}</Container>
		</>
	);
};

export default main;
