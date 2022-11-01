import React, { useState } from 'react'
import './Age.css'
function Age() {
  const [year, setYear] = useState('')
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')
  const [text, setText] = useState('')
  const makeOptions = (min, max) => {
    const options = []

    for (let i = min; i < max + 1; i++) {
      options.push(i)
    }
    return options
  }
  console.log(makeOptions(1, 12))
  return (
    <>
      <div>
        <span>
          西元
          <select
            value={year}
            onChange={(e) => {
              setYear(e.target.value)
            }}
          >
            <option value="">請選擇</option>
            {makeOptions(1920, 2022).map((value, index) => {
              return (
                <option key={index} value={value}>
                  {value}
                </option>
              )
            })}
          </select>
        </span>
        <span>
          月
          <select
            value={month}
            onChange={(e) => {
              setMonth(e.target.value)
            }}
          >
            <option value="">請選擇</option>
            {makeOptions(1, 12).map((value, index) => {
              return (
                <option key={index} value={value}>
                  {value}
                </option>
              )
            })}
          </select>
        </span>
        <span>
          日
          <select
            value={day}
            onChange={(e) => {
              setDay(e.target.value)
            }}
          >
            <option value="">請選擇</option>
            {/* 當 年＋月沒選好時不能繼續操作 */}
            {year !== '' &&
              month !== '' &&
              makeOptions(1, new Date(year, month, 0).getDate()).map(
                (value, index) => {
                  return (
                    <option key={index} value={value}>
                      {value}
                    </option>
                  )
                }
              )}
          </select>
        </span>
        <br />
        <button
          onClick={() => {
            if (year === '' || month === '' || day === '') {
              alert('請先完成年月日選擇')
              return //終止程式繼續執行
            }
            //18年的微秒值
            const ms18years = 568036800000
            //使用者生日的微秒值
            const msBirth = Number(new Date(`${year}/${month}/${day}`))
            //目前時間的微秒值
            const msNow = Number(new Date())

            if (msNow - msBirth > ms18years) {
              setText('滿18囉')
            } else {
              setText('還沒長大')
            }
          }}
        >
          是否滿18歲
        </button>
        <hr />
        <p className={text === '滿18囉' ? 'over' : 'not-over'}>{text}</p>
      </div>
    </>
  )
}
export default Age
