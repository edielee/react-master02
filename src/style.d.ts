// import original module declarations
// 타입스크립트에  styled-components 를 설명하는 파일에 우리가 설정한 theme 내용을 첨부하기위해
//https://styled-components.com/docs/api#typescript 에서 참고하여 style.d.ts파일을 생성해 선언파일을 덮어쓰기
// 정리하자면 styled components를 import하고 styled componennts의 테마정의를 확장한다.
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    accentColor: string;
  }
}
