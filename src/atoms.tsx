// import { atom, selector } from "recoil";

// export interface ITodo {
//   id: number;
//   text: string;
// }

// interface IToDoState {
//   [key: string]: ITodo[];
// }

// // 상태(state)의 일부 Atoms는 어떤 컴퍼넌트에서나 읽고 쓸수 있고 atom 값을 일는 컴포넌트들은 암묵적으로 atom을 구독
// export const toDoState = atom<IToDoState>({
//   key: "toDo",
//   default: {
//     "To Do": [],
//     Doing: [],
//     Done: [],
//   },
// });

//==============================================================6강

import { atom, selector } from 'recoil';

export enum Categories {
    'TO_DO' = 'TO_DO',
    'DOING' = 'DOING',
    'DONE' = 'DONE',
}

export interface IToDo {
    text: string;
    id: number;
    category: Categories;
}

export const categoryState = atom<Categories>({
    key: 'category',
    default: Categories.TO_DO,
});

export const toDoState = atom<IToDo[]>({
    key: 'toDo',
    default: [],
});

export const toDoSelector = selector({
    //selector : atom의 output을 변형시켜줌 조건에 맞게 새로운 배열로 atom의 output을 변경시켜줌
    key: 'toDoSelector',
    get: ({ get }) => {
        const toDos = get(toDoState);
        const category = get(categoryState);
        return toDos.filter((toDo) => toDo.category === category);
    },
});
