import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { atom, useRecoilSnapshot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';
import React from 'react';
import { Categories, categoryState, toDoSelector } from '../atoms';

function ToDoList() {
    const toDos = useRecoilValue(toDoSelector); //atom이나 selector값만 반환
    const [category, setCategory] = useRecoilState(categoryState); //atom값과 그걸 수정할수있는 modifier함수를 반환해줌
    const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
        setCategory(event.currentTarget.value as any);
    };
    console.log(toDos);
    return (
        <div>
            <h1>To Dos</h1>
            <hr />
            <select value={category} onInput={onInput}>
                <option value={Categories.TO_DO}>To Do</option>
                <option value={Categories.DOING}>Doing</option>
                <option value={Categories.DONE}>Done</option>
            </select>
            <CreateToDo />
            {toDos?.map((toDo) => (
                <ToDo key={toDo.id} {...toDo} />
            ))}
        </div>
    );
}

export default ToDoList;

// function ToDoList() {}

// export default ToDoList;
