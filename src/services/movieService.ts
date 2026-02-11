import type { Movie } from '../types/movie';
import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const TOKEN = import.meta.env.VITE_TMDB_TOKEN;
console.log('TMDB TOKEN:', TOKEN);

interface MovieResponse {
  results: Movie[];
  page?: number;
  total_results?: number;
  total_pages?: number;
}

export const fetchMovies = async (
  query: string,
  page: number
): Promise<MovieResponse> => {
  const response = await axios.get<MovieResponse>(`${BASE_URL}/search/movie`, {
    params: {
      query,
      page,
    },
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      accept: 'application/json',
    },
  });

  return response.data;
};
