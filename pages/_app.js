import NavBar from "../components/NavBar";

// _app.js -> index.js -> 순서로 진행
export default function App({ Component, pageProps }) { // App이름은 원하는걸로 해도 된다
  // Component는 index.js, about.js의 컴포넌트들을 가져온다

  return (
    <div>
      <NavBar></NavBar>{/* 여기에 추가시키면 나머지페이지에 할 필요 없어짐 */}
      <Component {...pageProps} />
      <span>hello</span>
      <style jsx global>{` {/* 전역 스타일 */}
        a {
          color: black;
        }
      `}</style>
    </div>
  );
}