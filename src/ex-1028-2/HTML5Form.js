import React, { useState } from 'react'

function HTML5Form() {
  const [inputText, setInputText] = useState('')
  const [textAreaText, setTextAreaText] = useState('')

  // single checkbox
  const [agree, setAgree] = useState(false)

  // radio group
  // 記錄使用者選了哪個值
  const [gender, setGender] = useState('')
  const genderOptions = ['男', '女', '不提供']
  //select
  const [pet, setPet] = useState('')
  const petOptions = ['貓', '狗', '貓熊']
  //check group
  const [likeList, setLikeList] = useState(['香蕉', '奇異果'])
  const fruitOptions = ['草莓', '香蕉', '奇異果']

  return (
    <>
      <h1>文字輸入框(input-text)</h1>
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value)
        }}
      />
      <h1>文字輸入區域(textarea)</h1>
      <textarea
        value={textAreaText}
        onChange={(e) => {
          setTextAreaText(e.target.value)
        }}
      />
      <h1>核取方塊(checkbox single)</h1>
      <input
        type="checkbox"
        checked={agree}
        onChange={(e) => {
          setAgree(e.target.checked)
        }}
      />
      <label>我同意註冊會員條款</label>

      <h1 style={{ color: 'lightgreen', border: '1px solid #ccc' }}>
        選項按鈕群組(radio group)
      </h1>
      {genderOptions.map((value, index) => {
        return (
          <div key={index}>
            <input
              type="radio"
              checked={gender === value}
              value={value}
              onChange={(e) => {
                setGender(e.target.value)
              }}
            />
            <label>{value}</label>
          </div>
        )
      })}

      <h1>下拉清單(select)</h1>
      <select
        value={pet}
        onChange={(e) => {
          setPet(e.target.value)
        }}
      >
        <option value="">---請選擇---</option>
        {petOptions.map((value, index) => {
          return (
            <option key={index} value={value}>
              {value}
            </option>
          )
        })}
      </select>

      <h1>核取方塊群組(checkbox group)</h1>
      {fruitOptions.map((value, index) => {
        return (
          <div key={index}>
            <input
              type="checkbox"
              //includes陣列中是否包含
              checked={likeList.includes(value)}
              value={value}
              onChange={(e) => {
                const value = e.target.value
                //三步驟=>從原本陣列複製一份新陣列->更改陣列內容->設定回新陣列
                if (likeList.includes(value)) {
                  //如果此項目值在state陣列中 -> 移出state陣列
                  const newLikeList = likeList.filter(
                    (value2, index2) => value2 !== value
                  )
                  setLikeList(newLikeList)
                } else {
                  //如果不在此state陣列中 -> 加到state陣列
                  const newLikeList = [...likeList, value]
                  setLikeList(newLikeList)
                }
              }}
            />
            <label>{value}</label>
          </div>
        )
      })}
    </>
  )
}
export default HTML5Form
