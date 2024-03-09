import { BrowserRouter, Route, Routes } from "react-router-dom";
import Coin from "./Coin";
import Coins from "./Coins";

interface IRouterProps {
  toggleDark: () => void;
  isDark: boolean;
}

//APP에서 넘겨준  toggleDark 라는 함수를 인터페이스를 생성하여 받을수있도록 설정해준다.
function Router({ toggleDark, isDark }: IRouterProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:coinId/*" element={<Coin isDark={isDark} />}></Route>
        <Route path="/" element={<Coins toggleDark={toggleDark} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
