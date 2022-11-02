import React, { useState } from 'react'
import { AiFillEye } from 'react-icons/ai'
import './MultipleInput.css'
function MultipleInput() {
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')

  const [user, setUser] = useState({ username: '', password: '' })
  const [show, setShow] = useState(false)
  const handleFieldChange = (e) => {
    //console.log(e.target.type, e.target.name, e.target.value)
    //如果屬性名稱相同物件會覆蓋
    const newUser = { ...user, [e.target.name]: e.target.value }
    setUser(newUser)
  }
  return (
    <>
      帳號：
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleFieldChange}
      />
      <br />
      密碼：
      <input
        type={show ? 'text' : 'password'}
        name="password"
        value={user.password}
        onChange={handleFieldChange}
      />
      <span
        onClick={() => {
          setShow(!show)
        }}
      >
        <AiFillEye />
      </span>
    </>
  )
}
export default MultipleInput
