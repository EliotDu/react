import { useState } from 'react'
function Counter() {
  //解構賦值[初始狀態,設定初始狀態]
  const [total, setTotal] = useState(0)

  return (
    <>
      <h1>{total}</h1>
      <button
        className="btn"
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        plus
      </button>
      <button
        onClick={() => {
          setTotal(total - 1)
        }}
      >
        minus
      </button>
    </>
  )
}
export default Counter
