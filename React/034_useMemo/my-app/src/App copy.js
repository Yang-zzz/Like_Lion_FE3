import React, { useRef, useState } from 'react'

export default function App() {
  const inputName = useRef(null)
  const inputId = useRef(null)
  const [userInfo, setUserInfo] = useState([])
  const [name, setName] = useState('')
  const [id, setId] = useState('')

  function handleInputName(){

  }

  function handleInputId(){

  }

  function handleSubmit(){

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
            <li></li>
          ))
        }
      </ul>
    </>
  )
}