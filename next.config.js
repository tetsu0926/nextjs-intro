/** @type {import('next').NextConfig} */

const API_KEY = "4288fa22c7d6e2efcbf9b3db1ed013ef";

const nextConfig = {
  reactStrictMode: true,
  async rewrites(){
    return [
      {
        source: '/api/movies/popular',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: '/api/movies/:id',
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      }
    ]
  },
}

module.exports = nextConfig
