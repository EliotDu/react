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
        {show ? 'εθ¦' : 'εδΎ'}
      </button>
    </div>
  )
}
export default Lifecycle
