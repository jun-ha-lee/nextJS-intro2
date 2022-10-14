// 페이지 간의 이동을 위해 Link를 import한다 (리액트 라우터 할때와 동일)
import Link from "next/link";
// Link는 클라이언트 사이드 네비게이션을 제공, 페이지 바뀔때 전체 새로고침 안함

export default function NavBar() {
  return (
    <nav>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <br />
      <Link href='/about'><a>About</a></Link>
    </nav>
  );
}