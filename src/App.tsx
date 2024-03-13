// import { DragDropContext, DropResult } from 'react-beautiful-dnd';
// import { useRecoilState } from 'recoil';
// import styled from 'styled-components';
// import { toDoState } from './atoms';
// import Board from './components/Board';

// const Wrapper = styled.div`
//     display: flex;
//     width: 100vw;
//     margin: 0 auto;
//     justify-content: center;
//     align-items: center;
//     height: 100vh;
// `;

// const Boards = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: flex-start;
//     width: 100%;
//     gap: 10px;
// `;

// //react-beautiful-dnd 란 ? 드래그 앤 드롭 기능을 구현하기 위한 라이브러리.

// function App() {
//     const [toDos, setToDos] = useRecoilState(toDoState); // useRecoilState: Recoil 상태를 읽고 쓰기 위해 useRecoilState 훅 사용.
//     // onDragEnd : 마우스 드래깅이 끝나면 호출되는 함수
//     // onDragEnd 함수를 정의하여 드래그 앤 드롭 이벤트를 처리합
//     const onDragEnd = (info: DropResult) => {
//         // DropResult은 react-beautiful-dnd 라이브러리에서 드래그 앤 드롭 동작이 종료될 때 반환되는 객체
//         const { destination, source } = info; // source: 드래그되었던 요소의 출발 지점에 대한 정보를 포함하는 객체. // destination: 드롭된 지점에 대한 정보를 포함하는 객체. (드롭되지 않은 경우는 null)
//         if (!destination) return; //이벤트 핸들러 내부에서 드롭된 지점이 없는 경우(즉, 드롭이 취소된 경우) 해당 이벤트 핸들러를 종료하고 더 이상 로직을 수행하지 않도록 하는 코드
//         if (destination?.droppableId === source.droppableId) {
//             // 같은 보드에서이동했을시
//             // 이벤트 핸들러에서는 드래그 앤 드롭 결과에 따라 Recoil 상태를 업데이트
//             setToDos((allBoards) => {
//                 //allBoards : 이전 상태에서 전달된 모든 보드들의 정보
//                 const boardCopy = [...allBoards[source.droppableId]];
//                 const taskObj = boardCopy[source.index];
//                 boardCopy.splice(source.index, 1);
//                 boardCopy.splice(destination?.index, 0, taskObj);
//                 return {
//                     ...allBoards,
//                     [source.droppableId]: boardCopy,
//                 };
//             });
//         }
//         if (destination.droppableId !== source.droppableId) {
//             // 다른보드로 이동했을 시.
//             // cross board movement
//             setToDos((allBoards) => {
//                 //이벤트 핸들러에서는 드래그 앤 드롭 결과에 따라 Recoil 상태를 업데이트
//                 const sourceBoard = [...allBoards[source.droppableId]];
//                 const taskObj = sourceBoard[source.index];
//                 const destinationBoard = [...allBoards[destination.droppableId]];
//                 sourceBoard.splice(source.index, 1);
//                 destinationBoard.splice(destination?.index, 0, taskObj);
//                 return {
//                     ...allBoards,
//                     [source.droppableId]: sourceBoard,
//                     [destination.droppableId]: destinationBoard,
//                 };
//             });
//         }
//     };

//     //
//     return (
//         <DragDropContext onDragEnd={onDragEnd}>
//             <Wrapper>
//                 <Boards>
//                     {Object.keys(toDos).map((boardId) => (
//                         <Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />
//                     ))}
//                 </Boards>
//             </Wrapper>
//         </DragDropContext>
//     );
// }

// export default App;

//-----------------------------------------------------------------6강
import { createGlobalStyle } from 'styled-components';

import ToDoList from './components/ToDoList';

//전역에 컴퍼넌트에 할당해주는스타일 ( createGlobalStyle)
// css소스는 어떠한 css도 리셋해주는 스타일 소스
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  font-weight: 300;
  font-family: 'Source Sans Pro', sans-serif;
  background-color:${(props) => props.theme.bgColor};
  color:${(props) => props.theme.textColor};
  line-height: 1.2;
}
a {
  text-decoration:none;
  color:inherit;
}
`;
//inherit 부모에게서 가져와서 설정해라
function App() {
    return (
        <>
            <GlobalStyle />
            <ToDoList />
        </>
    );
}

export default App;
