### 06강

( 00 ~ 01 )

1. 상태관리도구(state management)가 무엇인가 ?
   => React에서 State는 component 안에서 관리되는 것이다.
2. 상태관리도구 종류 ?
   => React Context, Redux, MobX
3. 리코일이 더 효율적인 이유 ?
   => 기존 : (isDark) : APP -> Router -> Coin -> CHart => prop을 내려주는 구조.
   App -> (isDark) <- Coin 어디서든 바로 접근이 가능.

( 02 ~ 04 )

1. 리코일을 사용하려면 RecoilRoot 를 선언하여 프로젝트 전체에 적용할 수 있도록 감싸줘야한다.
   RecoilRoot 란 ? 부모트리같은 개념. 그래서 index파일에 선언 후 감싸줌.
2. Atom이라는 활용하려는 상태를 생성해야한다.
   Atom이란 ? 상태(state)의 일부 Atoms는 어떤 컴퍼넌트에서나 읽고 쓸수 있고 atom 값을 일는 컴포넌트들은 암묵적으로 atom을 구독한다.
   그래서 atom을 구독하는 모든 컴포넌트들은 리랜더링이 되는 결과가 발생한다.
   atom에는 고유 key값과 dafault값을 생성할수있다. key는 말그대로 구분하기 위한 고유값이고, default값은 내가 설정할 value이다.
3. 각 컴퍼넌트에서 내가 설정한 atom의 value값을 적용하려면 useRecoilValue 라는 함수를 적용한다
   ex - const isDark = useRecoilValue(isDarkAtom); isDark는 내가 설정한 value값을 불러온다.
4. atom에 설정한 value값을 변경할수 있다.
   ex - const setDarkAtom = useSetRecoilState(isDarkAtom); isDarkAtom은 내가 export한 atom의 이름이고, 이건 함수를 반환한다.
   반환한 함수 setDarkAtom(true); 이렇게 값을 고정시킬수도있고 해당값을 유동적으로 변경할수 도 있다.
   ex - const toggleDarkAtom = () => setDarkAtom((prev) => !prev);

( 05 ~ 10 )

1. react-hook-form : 폼의 상태를 추적하고 유효성을 검사하는 데 사용 / useForm 이라는 hook을 사용해 각입력값에 유효성 검사, 에러 메세지등을 표시하고 설정하는데 사용된다.
   Page ToDoList 참고 .
