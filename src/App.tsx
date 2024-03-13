import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { RecoilBridge } from "recoil";
import { useEffect, useRef } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

// const Box = styled(motion.div)`
//   width: 200px;
//   height: 200px;
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   background-color: rgba(255, 255, 255, 0.2);
//   border-radius: 15px;
//   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
// `;

// const myVars = {
//   start: { scale: 0 },
//   end: { scale: 1, rotateZ: 360, Transition: { type: "spring", delay: 0.5 } },
// };

//-----------------------------------------------------------

// const Cicle = styled(motion.div)`
//   background-color: white;
//   width: 70px;
//   height: 70px;
//   border-radius: 35px;
//   place-self: center;
//   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
// `;

// const cicleVariants = {
//   start: { opacity: 0, y: 10 },
//   end: {
//     opacity: 1,
//     y: 0, //motion 에만 있음  y/x좌표설정
//   },
// };

// const boxVaiants = {
//   start: { opacity: 0, scale: 0.5 },
//   end: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       type: "spring",
//       duration: 0.5,
//       bounce: 0.5,
//       delayChildren: 0.5, //자식들에게 효과(자식의 variants)
//       staggerChildren: 0.2, // 순차적으로 딜레이 효과줌.(자식의 variants)
//     },
//   },
// };

////-----------------------------------------------------------

// const Box = styled(motion.div)`
//   width: 200px;
//   height: 200px;
//   background-color: rgba(255, 255, 255, 1);
//   border-radius: 15px;
//   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
// `;

// const boxVaiants = {
//   hover: {
//     //scale: 2,
//     rotateZ: 90,
//   },
//   click: {
//     //scale: 1,
//     borderRadius: "100px",
//   },
//   // drag: {
//   //   backgroundColor: "rgb(46, 204, 113)",
//   //   transition: { duration: 10 },
//   // },
// };

// const BiggerBox = styled.div`
//   width: 600px;
//   height: 600px;
//   background-color: rgba(255, 255, 255, 0.2);
//   border-radius: 40px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   overflow: hidden;
// `;

////-----------------------------------------------------------

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  //const biggerBoxRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0); //한번만 랜더링된다.
  const scale = useTransform(x, [-800, 0, 800], [2, 1, 0]); // 기준이되는값, 조건, 아웃풋
  useEffect(() => {
    scale.on("change", () => console.log(scale.get())); //x축의 경로를 업데이트한다.
  }, [x]);

  return (
    <Wrapper>
      {/* <Box variants={myVars} initial="start" animate="end" /> */}
      {/* <Box variants={boxVaiants} initial="start" animate="end">
        <Cicle variants={cicleVariants} />
        <Cicle variants={cicleVariants} />
        <Cicle variants={cicleVariants} />
        <Cicle variants={cicleVariants} />
      </Box> */}
      {/* <BiggerBox ref={biggerBoxRef}>
        <Box
          drag //말그대로 클릭후 이동이 가능하게함.
          dragSnapToOrigin // 원래 위치로 돌아가게함다.
          dragElastic={0} //박스에 갇혀서 밖에로 이동못하게함.
          dragConstraints={biggerBoxRef} //drag 할수있는 범위
          variants={boxVaiants}
          whileHover="hover"
          whileDrag="drag"
          whileTap="click"
        ></Box>
      </BiggerBox> */}

      <Box style={{ x, scale: scale }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}
export default App;
