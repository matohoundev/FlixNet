export default class MovieService {
  url: string;
  key: string;

  constructor() {
    this.url = "https://api.themoviedb.org/3/movie/";
    this.key = "b43048aec4091e513a67af67e0c58ab6";
  }

  async getPopularMovies() {
    const response = await fetch(
      `${this.url}popular?api_key=${this.key}&language=fr-FR&page=1`
    );
    const data = await response.json();
    return data.results.slice(0, 4);
  }
}
