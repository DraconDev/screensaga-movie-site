import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { blue } from "@mui/material/colors";

const theme = createTheme({
	palette: {
		primary: {
			main: "#2C3639",
		},
		secondary: {
			light: "#3F4E4F",
			main: "#3F4E4F",
			contrastText: "#DAEAF1",
		},
	},
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
