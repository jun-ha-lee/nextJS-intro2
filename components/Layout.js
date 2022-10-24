import NavBar from "./NavBar";

export default function Layout({ children }) {
  // children은 react가 제공하는 prop,
  // 하나의 컴포넌트를 또 다른 컴포넌트 안에 넣을때 사용
  // Layout컴포넌트는 children이라는 prop을 가진다
  // children은 _app에 있는 <Component {...pageProps} />를 말한다
  return <>
    <NavBar />
    <div>{children}</div>
    <div>hi</div>
  </>
}