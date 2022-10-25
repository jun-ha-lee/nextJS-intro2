import { useEffect, useState } from "react";
// import NavBar from "../components/NavBar";
import Seo from "../components/Seo";
import Link from "next/link";
import { useRouter } from "next/router";

// const API_KEY = "10923b261ba94d897ac6b81148314a3f"; // API KEY입력
// next.config.js로 이동

export default function Home({ results }) {
  // 아래 getServerSideProps의 데이터를 여기서 results로 해서 가져간다
  const [counter, setCounter] = useState(0);
  function counterUp() {
    setCounter((current) => current + 1);
  }

  // 로딩을 보여주고 화면을 보여줄지
  // 아니면 서버사이드렌더링으로 안보여주고 보여줄지

  // const [movies, setMovies] = useState([]); // api로 받아올 영화 담기위해
  // // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   (async () => {
  //     const { results } = await (
  //       await fetch(
  //         //`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
  //         // next.config.js로 이동
  //         `/api/movies`
  //       )
  //     ).json();
  //     console.log(results);
  //     setMovies(results);
  //     // setLoading(false);
  //   })();
  // }, []);

  const router = useRouter();
  function movieClick(id, title) {
    // movie.id에서 받아온 id
    router.push(
      {
        pathname: `/movies/${id}`,
        query: {
          // title: "potato", // http://localhost:3000/movies/436270?title=potato 이것처럼 보임
          title: title,
        },
      },
      `/movies/${id}`
    ); // , '' 이자리는 위의 지저분한 주소를 ''으로 변화시킴
  }

  return (
    <div>
      <Seo title="Home" />
      <h1>Hello! {counter}</h1>
      <button onClick={counterUp}>click me</button>
      <br />
      {/* {!movies && <h4>Loading...</h4>} */}
      {/* !movies는 false이므로 위의 연산은 !movies가 출력 */}
      {/* {console.log(!movies)} */}
      {/* ?. 옵셔널 체이닝 사용, 이유는 에러를 출력안하고 undefined를 출력하여 안정성 도모 */}
      {results?.map((movie) => (
        <div
          key={movie.id}
          onClick={() => movieClick(movie.id, movie.original_title)}
        >
          <h4>
            <Link
              href={{
                pathname: `/movies/${movie.id}`,
                query: {
                  title: movie.original_title,
                },
              }}
              as={`/movies/${movie.id}`}
            >
              <a>{movie.original_title}</a>
            </Link>
          </h4>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.original_title}
          />
        </div>
      ))}
      {/* <NavBar /> */}
    </div>
  );
}

export async function getServerSideProps() {
  // 함수 이름 고정
  // 여기에 작성되는것은 클라이언트가 절대 볼수 없음
  // 서버에서만 실행
  const { results } = await (
    await fetch(
      //`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      // next.config.js로 이동
      `http://localhost:3000/api/movies`
    )
  ).json();

  return {
    props: {
      results,
    },
  };
}
