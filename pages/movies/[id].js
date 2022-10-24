// 이 페이지의 주소는 홈주소/movies/원하는주소 이렇게 나온다

import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  console.log(router);

  return "detail";
}
