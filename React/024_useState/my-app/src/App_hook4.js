import React, { useState } from 'react';

function Resume(props) {
  const [like, setLike] = useState(0);
  // let heart = like % 2 === 1 ? 'β€οΈ' : '';

  // let heart = ''
  // for (let i of String(like)){
  //   if(i === '3'){
  //     heart = 'μ§π'
  //   } else if (i === '6'){
  //     heart = 'μ§π'
  //   } else if (i === '9'){
  //     heart = 'μ§π'
  //   }
  // }μ΄κΈ°κ°

  // '123123'.match(/[369]/g)
  // ['3', '3']
  // let heart = String(like).match(/[369]/g)? 'μ§π' : '';

  // 123123'.split("").filter(v => v === '3' || v === '6' || v === '9')
  // ['3', '3']
  let heart = String(like).split("").filter(v => v === '3' || v === '6' || v === '9').length? 'μ§π' : '';

  function handleClickLike() {
      // setLike(like + 1)
      // console.log(like);
    setLike(like + 1);
  }

  return(
      <div>
          <button onClick={handleClickLike}>like : {like}</button>
          <span>{heart ? heart : ''}</span>
      </div>
  )
}

function App() {
  return (
    <div>
      <Resume />
    </div>
  );
}

export default App;