import { useState, useEffect } from 'react'
import axios from 'axios'

function User() {
  //先把要取得的資料樣式註解在上面方便對照
  //     [{{
  //     "id": "107001",
  //     "name": "張佳蓉",
  //     "birth": "990101"
  //   }, }]
  const [users, setUsers] = useState([])
  //載入資料指示
  const [isloading, setIsLoading] = useState(false)

  // 錯誤訊息用
  const [errorMessage, setErrorMessage] = useState('')

  const getUsers = async () => {
    try {
      const response = await axios.get(
        'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users'
      )
      console.log(response)

      setUsers(response.data)
    } catch (e) {
      console.log(e.message)
      setErrorMessage(e.message)
    }
  }

  // didMount時載入資料
  useEffect(() => {
    //先開啟載入指示器
    setIsLoading(true)

    getUsers()
    //延遲3秒才關掉指示器
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

  const spinner = (
    <>
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </>
  )

  const display = errorMessage ? (
    errorMessage
  ) : (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>姓名</th>
        </tr>
      </thead>
      <tbody>
        {users.map((v, i) => {
          return (
            <tr key={v.id}>
              <td>{v.id}</td>
              <td>{v.name}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )

  return (
    <>
      <h1>會員資料</h1>
      <hr />
      {isloading ? spinner : display}
    </>
  )
}
export default User
