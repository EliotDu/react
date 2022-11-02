import React, { useState } from 'react'
import { AiFillEye } from 'react-icons/ai'
import Button from 'react-bootstrap/Button'
import './HTML5ValidForm.css'
function HTML5ValidForm() {
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')

  const [user, setUser] = useState({ username: '', password: '', email: '' })
  const [fieldErrors, setFieldErrors] = useState({
    username: '',
    password: '',
    email: '',
  })
  const [show, setShow] = useState(false)
  const handleFieldChange = (e) => {
    //console.log(e.target.type, e.target.name, e.target.value)
    //如果屬性名稱相同物件會覆蓋
    const newUser = { ...user, [e.target.name]: e.target.value }
    setUser(newUser)
  }
  const handleFormSubmit = (e) => {
    //阻擋預設form送出行為
    e.preventDefault()
    //得到輸入值的方式
    //第1種，從state直接得到
    console.log(user)

    //第2種，用Formdata物件
    //如果為不可控的元件需要用formData取值
    const formData = new FormData(e.target)
    console.log(
      formData.get('password'),
      formData.get('username'),
      formData.get('email')
    )
    // 其它驗証…修改

    // 送到伺服器
  }

  // 當表單有不合法的驗証出現時會觸發
  const handleFormInvalid = (e) => {
    // 阻擋預設行為 - 關閉泡泡訊息
    e.preventDefault()

    // console.log(e.target.name, e.target.validationMessage)
    setFieldErrors({
      ...fieldErrors,
      [e.target.name]: e.target.validationMessage,
    })
  }
  //如果使用者發現錯誤後回填欄位就清空錯誤訊息
  const handleFormChange = (e) => {
    setFieldErrors({ ...fieldErrors, [e.target.name]: '' })
  }
  return (
    <>
      <form
        onSubmit={handleFormSubmit}
        onInvalid={handleFormInvalid}
        onChange={handleFormChange}
      >
        <label>帳號</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleFieldChange}
          required
        />
        <small>{fieldErrors.username}</small>
        <br />
        <label>信箱</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleFieldChange}
          required
        />
        <small>{fieldErrors.email}</small>
        <br />
        <label>密碼</label>
        <input
          id="password"
          //切換密碼的型態
          type={show ? 'text' : 'password'}
          name="password"
          value={user.password}
          onChange={handleFieldChange}
          required
        />
        <small>{fieldErrors.password}</small>
        <span
          onClick={() => {
            setShow(!show)
          }}
        >
          <AiFillEye />
        </span>
        <br />
        <Button type="submit" variant="secondary">
          SEND
        </Button>
        {/* 沒加上type相當於type="submit" */}
        <Button
          type="button"
          variant="secondary"
          className="m-2"
          onClick={() => {
            setUser({
              username: 'eliot',
              email: 'sss@ssss',
              password: '1212121',
            })
          }}
        >
          AUTO
        </Button>
        <Button
          type="button"
          variant="secondary"
          onClick={() => {
            setUser({
              username: '',
              email: '',
              password: '',
            })
          }}
        >
          RESET
        </Button>
      </form>
    </>
  )
}
export default HTML5ValidForm
