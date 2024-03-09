import styled from "styled-components";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchCoins } from "../api";
import { Helmet } from "react-helmet";

// 화면가운데로 오게함
//  max-width: 480px;
// margin: 0 auto;
const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinsList = styled.ul``;

// LInk 임에도 자동으로 <a>로 인식한다.
// block : 이름 바깥부분까지 클릭가능
//padding 을 뭐로하느냐에 따라 마우스 위치에 따라 손가락모양으로 ㅂ바뀜(클릭가능한.)
const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.textColor};
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    padding: 20px;
    transition: color 0.2s ease-in;
    display: flex;
    align-items: center;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

interface IcoinsProps {
  toggleDark: () => void;
}

// App -> 라우터에서 전달한 toggleDark 함수를 받을수 있도록 interface 선언하여 설정해준다.
function Coins({ toggleDark }: IcoinsProps) {
  const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins); //allCoins 쿼리키 고유식별자, fetchCoins 함수
  //fetchCoins 함수를 부르고 로딩중이람녀 알려주고 넘어오는정보를 담는처리를 할수있다.
  //데이터를 캐시에 저장해둔다. 그래서 정보를 파괴하지않고 저장해두어 다시 통신하지않고 저장된 정보를 불러와 다시 돌아왔을떄 로딩이 안뜬다.

  return (
    <Container>
      <Helmet>
        <title>코인</title>
      </Helmet>
      <Header>
        <Title>코인</Title>
        <button onClick={toggleDark}>Toggle Dark Mode</button>
      </Header>
      <CoinsList>
        {isLoading ? (
          <Loader>Loading...</Loader>
        ) : (
          <CoinsList>
            {data?.slice(0, 100).map((coin) => (
              <Coin key={coin.id}>
                <Link
                  to={{
                    pathname: `/${coin.id}`,
                  }}
                  state={{ name: coin.name }}
                >
                  <Img
                    src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}
                  />
                  {coin.name} &rarr;
                </Link>
              </Coin>
            ))}
          </CoinsList>
        )}
      </CoinsList>
    </Container>
  );
}
export default Coins;
