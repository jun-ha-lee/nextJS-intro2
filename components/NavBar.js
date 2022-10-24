// 페이지 간의 이동을 위해 Link를 import한다 (리액트 라우터 할때와 동일)
import Link from "next/link";
// Link는 클라이언트 사이드 네비게이션을 제공, 페이지 바뀔때 전체 새로고침 안함

import { useRouter } from "next/router"; // useRouter제공, nextJS

import styles from "./NavBar.module.css"; // css import

export default function NavBar() {
  const router = useRouter();
  console.log(router+'router');

  return (
    <nav className={styles.nav}> {/* 모듈css사용 */}
      <img src="/vercel.svg" alt="" /> {/* public폴더 안에 있으면 경로가 루트로 바로 찾을 수 있다 */}
      <Link href='/'>{/* <a href=''>대신에 <Link href=''><a></a></Link>쓴다 */}
        {/* <Link안에는 href만 들어가고 className이라던지 style이라던지 적용안된다, 적용하려면 아래 <a>에 넣어야 함 */}
        <a className="home" style={{ color: router.pathname === '/' ? 'red' : 'blue' }}>Home</a>
      </Link>
      <Link href='/about'>
        <a className={`${styles.link} ${router.pathname === '/about' ? styles.active : ''}`}>About</a>
        {/* className을 두개 갖게 하도록 함 */}
      </Link>
      <Link href='/you'>
        <a className={router.pathname === '/you' ? 'good' : ''}>You</a>{/* 아래 jsx의 good클래스 영향 */}
      </Link>
      <style jsx>{` // NavBar에서만 적용된다(다른곳에서 같은 클래스네임 적어도 영향을 안줌)
        a {
          text-decoration: none;
        }
        .good {
          color: yellow;
        }
      `}</style>
    </nav>
  );
}