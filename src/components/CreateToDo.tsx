import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../atoms";

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState); // 상태업데이트
  const category = useRecoilValue(categoryState);
  // register : onchange,onblur, useState 상태같은 함수를 사용할수 있도록 한다.
  // handleSubmit : 해야하는 모든 validation이나 다른일들을 모두 끝마친뒤에 데이터가 유효할떄만 onVaild함수를 호출함.
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IForm>(); // useForm 이라는 hook을 사용해 각입력값에 유                                                                                                            성 검사, 에러 메세지등을 표시하고 설정하는데 사용
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      // oldToDos : 이전상태값.
      { text: toDo, id: Date.now(), category },
      ...oldToDos,
    ]);
    setValue("toDo", ""); //setValue("firstName", ""); // onsubmin함수를 실행하면 값이 지워짐.
  };
  return (
    //handleSubmit:폼(form)을 제출할 때 호출되는 함수
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", {
          // 객체분해문법(...) 을 이용하면 register 함수가 반환하는 객체의 속성을 편리하게 해당 input 엘리먼트의 속성으로 설정할 수 있
          //  register : 폼 컨트롤(input, select, textarea 등)을 등록하고 해당 컨트롤을 제어하는 데 사용됩니다. validation이나,
          required: "Please write a To Do",
        })}
        placeholder="Write a to do"
      />
      {errors.toDo && <p>{errors.toDo.message}</p>}
      <button>Add</button>
    </form>
  );
}

export default CreateToDo;

// function CreateToDo() {}

// export default CreateToDo;
