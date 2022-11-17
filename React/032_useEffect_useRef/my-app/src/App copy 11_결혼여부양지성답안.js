import { useState, useEffect } from 'react'

export default function App() {
  const [결혼여부, set결혼여부] = useState('미혼')
  const [잔고, set잔고] = useState(1000000)
  const [결혼대상, set결혼대상] = useState('대상없음')

  const handle소개팅 = () => {
    set결혼여부('소개팅중')
    set잔고(500000)
    set결혼대상('미정')
  }

  // 퀴즈2 : 잔고가 500000원 이하 이고 and 결혼대상이 미정이시면 부모님께서 용돈 200만원을주십니다.

  useEffect(() => {
    if (결혼대상 === '미정' && 잔고 <= 50000000 ) {
      set잔고(잔고 + 2000000)
      set결혼대상('용돈받고 난 후 이제 만날 사람')
    }
  }, [잔고, 결혼대상])

  
  return (
    <div>
      <button onClick={handle소개팅}>소개팅GO</button>
      <p>결혼여부: {결혼여부}</p>
      <p>잔고: {잔고}</p>
      <p>결혼대상: {결혼대상}</p>
    </div>
  )
}
