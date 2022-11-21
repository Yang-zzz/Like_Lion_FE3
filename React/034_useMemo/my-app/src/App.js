import React, { useRef, useState } from 'react'

export default function App() {
  const inputName = useRef(null)
  const inputId = useRef(null)
  const [userInfo, setUserInfo] = useState([])
  const [name, setName] = useState('')
  const [id, setId] = useState('')

  function handleInputName(e){
    console.log(e)
    setName(e.target.value)
    console.log('렌더링 - 1')

  }

  function handleInputId(e){
    console.log(e)
    setName(e.target.value)
    console.log('렌더링 - 2')
    
  }

  function handleSubmit(e){
    e.preventDefault()
    //userInfo.push({});
    const newInfo = [...userInfo]

  }

  function getNum(li){
    console.log('렌더링!')
    return li.length

  }

  return (
    <>
      <form>
        <input 
          type='text'
          placeholder='이름을 입력하세요'
          onChange={handleInputName}
          ref={inputName}
        />
        <input 
          type='text'
          placeholder='아이디를 입력하세요'
          onChange={handleInputId}
          ref={inputId}
        />
        <button type='submit' onClick={handleSubmit}>버튼</button>
      </form>
      <ul>
        {
          userInfo.map((value, index) => (
            <li key={index}>
              <h3>이름 : {value.name}</h3>
              <strong>아이디 : {value.id}</strong>
            </li>
          ))
        }
      </ul>
      <span>{getNum(userInfo)}</span>
    </>
  )
}