import useSWR from "swr";

import { Box, Typography } from "@mui/material";
import axios from "axios";

export async function getVideoTrailer(
	searchQuery: string
): Promise<string | undefined> {
	const response = await axios.get(
		"https://www.googleapis.com/youtube/v3/search",
		{
			params: {
				q: `${searchQuery} official trailer`,
				part: "snippet",
				type: "video",
				videoDefinition: "high",
				key: import.meta.env.VITE_YOUTUBE_API_KEY,
			},
		}
	);
	const videoAddress = await response.data.items[0].id.videoId;
	const url = "https://www.youtube.com/embed/" + videoAddress;
	console.log(response, url, "test2");
	return url;
}

const VideoPlayer = ({ searchQuery }: { searchQuery: string }) => {
	const { data, error, isLoading } = useSWR(searchQuery, getVideoTrailer);

	console.log(data);

	return (
		<Box sx={{ pl: 1, display: "flex", width: "100%" }}>
			{data ? (
				<iframe
					src={data}
					title="Trailer"
					width="100%"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				/>
			) : (
				<Typography variant="h6" sx={{ p: 1 }}>
					Lorem iTypography variant="body1"sum dolor sit amet,
					consectetuer adipiscing elit. Aenean commodo ligula eget
					dolor. Aenean massa. Cum sociis natoque penatibus et magnis
					dis parturient montes, nascetur ridiculus mus. Donec quam
					felis, ultricies nec, pellentesque eu, pretium quis, sem.
					Nulla consequat massa quis enim. Donec pede justo, fringilla
					vel, aliquet nec, vulputate eget, arcu. In enim justo,
					rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
					dictum felis eu pede mollis pretium. Integer tincidunt. Cras
					dapibus. Vivamus elementum semper nisi. Aenean vulputate
					eleifend tellus. Aenean leo ligula, porttitor eu, consequat
					vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in,
					viverra quis, feugiat a, tellus. Phasellus viverra nulla ut
					metus varius laoreet. Quisque rutrum. Aenean imperdiet.
					Etiam ultricies nisi vel augue. Curabitur ullamcorper
					ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas
					tempus, tellus eget condimentum rhoncus, sem quam semper
					libero, sit amet adipiscing sem neque sed ipsum. Nam quam
					nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
					Maecenas nec odio et ante tincidunt tempus. Donec vitae
					sapien ut libero venenatis faucibus. Nullam quis ante. Etiam
					sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
					fringilla mauris sit amet nibh. Donec sodales sagittis
					magna. Sed consequat, leo eget bibendum sodales, augue velit
					cursus nunc,
				</Typography>
			)}
		</Box>
	);
};

export default VideoPlayer;