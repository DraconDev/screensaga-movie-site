import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import {
	Navigate,
	RouterProvider,
	createBrowserRouter,
	useParams,
} from "react-router-dom";
import "./index.css";
import App from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import Recommendations from "./pages/Recommendations";
import SearchPage from "./pages/SearchPage";

function SearchPageWrapper() {
	const { search } = useParams();
	return <SearchPage search={search} />;
}

function MoviePageWrapper() {
	const { id } = useParams();
	return <MoviePage id={id} />;
}

const router = createBrowserRouter([
	{
		path: "/movie/:id",
		element: <MoviePageWrapper />,
	},
	{
		path: "search/:search",
		element: <SearchPageWrapper />,
	},
	{
		path: "recommendations/",
		element: <Recommendations />,
	},
	{
		path: "/",
		element: <App />,
		children: [],
	},
	{
		path: "*",
		element: <Navigate to="/" />,
	},
]);

const theme = createTheme({
	palette: {
		primary: {
			main: "#2C3639",
		},
		secondary: {
			light: "#3F4E4F",
			main: "#3F4E4F",
		},
		text: {
			primary: "#ffffff",
		},
		background: {
			default: "rgb(17, 17, 19)", // sets the
		},
	},
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<RouterProvider router={router} />
		</ThemeProvider>
	</React.StrictMode>
);
