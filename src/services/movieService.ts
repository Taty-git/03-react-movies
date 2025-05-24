import axios from 'axios';
import type {Movie} from '../types/movie';

axios.defaults.baseURL = 'https://api.themoviedb.org/';

const TOKEN: string = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTJhZTczODllMzk1MTRlNGQzNjA5NWVhMTYzNzY0YyIsIm5iZiI6MTc0ODAyODMwNy41ODcwMDAxLCJzdWIiOiI2ODMwY2I5MzFkOWM3OTc4MzZhODYwN2QiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.fBYgNheBU3Qt8z93hIsbR6aXqULljJKSVhR01E8aBWI'

export const fetchMovies = async (query: string): Promise<Movie[]> => {

    const url = `${axios.defaults.baseURL}3/search/movie?query=${query}&include_adult=false&language=en-US`;
    const params = {
        headers: {
            Authorization: `Bearer ${TOKEN}`,
        },
    };

    try {
        const response = await axios.get<{results: Movie[]}>(url, params);

            return response.data.results || [];

    } catch (error) {
        console.error("Error fetching movies:", error);
        return [];
    }
};
