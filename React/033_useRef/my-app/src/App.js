// import {useState, useRef} from 'react'

// // 문제 input창 3개를 만들어 자기소개를 하는 기능을 만들어주세요.
// // input 1 - 이름
// // input 2 - 성별
// // input 3 - 나이
// // button - 자기소개
// // return - 제 이름은 이호준입니다. 저는 남자이고요. 나이는 10살입니다.


// export default function App() {
//   const 이름 = useRef(null)
//   const 성별 = useRef(null)
//   const 나이 = useRef(null)
//   const [자기소개, set자기소개] = useState('')
  
//   const handle자기소개 = (e) => {
//     set자기소개(`
//       제 이름은 ${이름.current.value}
//       제 성별은 ${성별.current.value}
//       제 나이는 ${나이.current.value}
//     `)
//   }

//   return (
//     <div>
//       <input type="text" ref={이름}/>
//       <input type="text" ref={성별}/>
//       <input type="text" ref={나이}/>
//       <button onClick={handle자기소개}>자기소개</button>
//       {자기소개}
//     </div>
//   )
// }

import React, { useState, useEffect, useRef } from 'react';

function Counter() {
  const [count, setCount] = useState(0)
  const [countTwo, setCountTwo] = useState(0)
  let countThree = useRef(0)
  let countFour = 0
  console.log(countThree)

  // 랜더링 됨
  const handleCountUp = (e) => {
    setCount(count + 1)
    console.log(count) // 비동기 -> useEffect로 추적하면 동기 가능
  }
  // 랜더링 됨
  const handleCountUpTwo = (e) => {
    setCountTwo(countTwo + 1)
    console.log(countTwo) // 비동기 -> useEffect로 추적하면 동기 가능
  }
  // 클릭하면 변수의 값은 증가하지만 랜더링은 되지 않음
  const handleCountUpThree = (e) => {
    countThree.current = countThree.current + 1
    console.log(countThree.current)
  }
  // 랜더링 안되고 다른 state가 변해서 재렌더링 되어도 0으로 초기화
  const handleCountUpFour = (e) => {
    countFour = countFour + 1
    console.log(countFour)
  }

  useEffect(() => {
    console.log('count가 감시되고 있습니다.')
    console.log(`감시된 변수 : ${count}`)
  }, [count]) // count가 변경되는 것을 감시
  return(
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>up!</button>
      <div>{countTwo}</div>
      <button onClick={handleCountUpTwo}>up!</button>
      <div>{countThree.current}</div>
      <button onClick={handleCountUpThree}>up!</button>
      <div>{countFour}</div>
      <button onClick={handleCountUpFour}>up!</button>
    </>
  )
}

function App() {
  return (
    <div>
      <Counter/>
    </div>
  );
}

export default App;