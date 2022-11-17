import {useState, useRef} from 'react'

export default function App() {
  const inputName = useRef(null);
  const inputJender = useRef(null);
  const inputAge = useRef(null);

  const [name, setName] = useState('');
  const [jender, setJender] = useState('');
  const [age, setAge] = useState('');
  const [자기소개, set자기소개] = useState('');


  const introduce = (e) => {
    console.log('클릭')

    let name = inputName.current.value;
    let jender = inputJender.current.value;
    let age = inputAge.current.value;
    
    setName(name);
    setJender(jender);
    setAge(age);

    set자기소개( `제 이름은 ${name}입니다. 성별은${jender}이고 나이는 ${age}입니다.`)
  }

  return (
    <div>
      <label>
        <input type="text" ref={inputName} />
        <input type="text" ref={inputJender} />
        <input type="text" ref={inputAge} />
        <button onClick={introduce}>자기소개</button>
        <p>{자기소개}</p>
      </label>
    </div>
  )
}
