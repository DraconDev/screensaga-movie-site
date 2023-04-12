export type Movie = {
	id: number;
	title: string;
	poster_path: string;
	vote_average: number;
	[key: string]: any;
};

export type Genres = {
	id: number;
	name: string;
};
