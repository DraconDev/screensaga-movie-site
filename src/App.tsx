import { ThemeProvider } from "@emotion/react";
import { Box, createTheme } from "@mui/material";
import MovieList from "./components/MovieList";
import MainLayout from "./layout/MainLayout";

const theme = createTheme({
	palette: {
		primary: {
			main: "#2C3639",
		},
		secondary: {
			light: "#3F4E4F",
			main: "#3F4E4F",
		},
	},
});

function App() {
	return (
		<Box>
			<ThemeProvider theme={theme}>
				<MainLayout>
					<MovieList />
				</MainLayout>
			</ThemeProvider>
		</Box>
	);
}

export default App;
