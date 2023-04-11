import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/HomePage";
import "./index.css";
import {
	RouterProvider,
	createBrowserRouter,
	useParams,
} from "react-router-dom";
import MoviePage from "./pages/MoviePage";
import SearchPage from "./pages/SearchPage";
import path from "path";

function SearchPageWrapper() {
	const { search } = useParams();
	return <SearchPage search={search} />;
}

const router = createBrowserRouter([
	{
		path: "/movie/:id",
		element: <MoviePage />,
	},
	{
		path: "search/:search",
		element: <SearchPageWrapper />,
	},
	{
		path: "/",
		element: <App />,
		children: [],
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
