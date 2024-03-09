### 06강

1. 상태관리도구(state management)가 무엇인가 ?
   => React에서 State는 component 안에서 관리되는 것이다.
2. 상태관리도구 종류 ?
   => React Context, Redux, MobX
3. 리코일이 더 효율적인 이유 ?
   => 기존 : (isDark) : APP -> Router -> Coin -> CHart => prop을 내려주는 구조.
   App -> (isDark) <- Coin 어디서든 바로 접근이 가능.
