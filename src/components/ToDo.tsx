// import React from "react";
// import { useSetRecoilState } from "recoil";
// import { Categories, IToDo, toDoState } from "../atoms";

// function ToDo({ text, category, id }: IToDo) {
//   const setToDos = useSetRecoilState(toDoState); // useSetRecoilState :  Recoil 상태의 값을 설정할 수 있습니다.
//   const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     const {
//       currentTarget: { name },
//     } = event; //클릭한 버튼 name (카테고리정보)
//     setToDos((oldToDos) => {
//       const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id); //이전 상태 값에 id와 입력된 값에 id의 같은지여부조건으로 변경하려는 인덱스번호찾기 .
//       const newToDo = { text, id, category: name as any };
//       return [
//         ...oldToDos.slice(0, targetIndex),
//         newToDo,
//         ...oldToDos.slice(targetIndex + 1),
//       ]; //정확한 인덱스에 위치한값을 바꿔치기( 버튼클릭하면 ToDO -> doing or done )
//     });
//   };
//   return (
//     <li>
//       <span>{text}</span>
//       {category !== Categories.DOING && (
//         <button name={Categories.DOING} onClick={onClick}>
//           Doing
//         </button>
//       )}
//       {category !== Categories.TO_DO && (
//         <button name={Categories.TO_DO} onClick={onClick}>
//           To Do
//         </button>
//       )}
//       {category !== Categories.DONE && (
//         <button name={Categories.DONE} onClick={onClick}>
//           Done
//         </button>
//       )}
//     </li>
//   );
// }

// export default ToDo;

function ToDo() {}

export default ToDo;
