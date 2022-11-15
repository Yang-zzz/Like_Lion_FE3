import { useState } from 'react'

function Resume({이름, 취미, 자기소개}){
  const [like, setLike] = useState(0) 
  // const [like, setLike] = useState(100) 
  // const [like, setLike] = useState('hello world')

  function handleclickLike(){
    // like += 1
    // setLike(like + 1); // like = like + 1
       setLike(like + 2); // like = like + 1
    // setLike(like + 1); // like = like + 1
    // setLike(like + 1); // like = like + 1
    console.log(like)
  }

  return (
    <section>
      <h2>{이름}</h2>
      <p>{취미}</p>
      <p>{자기소개}</p>
      {/*
      여기가 왜 증가되지 않을까요?
      변수가 변경이 된다고 하더라도 렌더링이 다시 일어나지 않기 때문입니다.
      감시하고싶은 부분 원하는 부분만 변경이될때 렌더링이 된다면 호율적이기 때문이다!
      */}
      <button onClick={handleclickLike}>{like}</button>
    </section>
  )
}

function App() {
  return (
    <main>
      <Resume 이름="이호준" 취미="코딩" 자기소개="안녕하세요. 제주코딩베이스캠프 이호준입니다."/>
    </main>
  );
}

export default App;