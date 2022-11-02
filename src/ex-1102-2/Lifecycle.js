import { useState } from 'react'
import FC from './FC'
import CC from './CC'
function Lifecycle() {
  const [show, setShow] = useState(true)
  return (
    <div>
      {/* {show && <CC />} */}
      {show && <FC />}
   
      <button
        onClick={() => {
          setShow(!show)
        }}
      >
        {show ? '再見' : '回來'}
      </button>
    </div>
  )
}
export default Lifecycle
