/** @type {import('next').NextConfig} */

const API_KEY = "10923b261ba94d897ac6b81148314a3f"; // API KEY입력
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // api 숨기기
  async redirects() {
    // 유저가 url이 바뀌는것을 볼 수 있다
    return [
      {
        source: "/contact", // 유저가 contact로 간다면
        // "/old/:path" 로 하면
        // "/old/:path*" 로 하면
        destination: "/form", // form으로 보낸다
        // "/new/:path" new/경로 이렇게 바뀐다
        // "/new/:path*" new/경로/경로/경로 이렇게 바뀐다
        permanent: false, // 영구적인지 아닌지(브라우저가 기억하는지 안하는지)
      },
      /* 여러개 만들수 있다
      {
        source:"/aaa"
      }
      */
    ];
  },

  async rewrites() {
    // 유저가 url이 바뀌는걸 모른다
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
