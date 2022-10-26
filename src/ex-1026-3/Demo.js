import React, { useState } from 'react'

const objArray = [
  {
    id: 1,
    text: 'a',
  },
  {
    id: 2,
    text: 'b',
  },
  {
    id: 3,
    text: 'c',
  },
  {
    id: 4,
    text: 'aa',
  },
]

function Demo() {
  const [data, setData] = useState(objArray)

  return (
    <>
      <h1>物件陣列的各種操作</h1>
      <p>呈現資料</p>
      <table border="1">
        {data.map((v, i) => {
          return (
            <tr key={v.id}>
              <td>{v.id}</td>
              <td>{v.text}</td>
            </tr>
          )
        })}
      </table>
      <hr />
      <button
        onClick={() => {
          // 先寫出要新增的物件值
          const newObj = { id: 99, text: 'xxx' }

          // 1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)
          // 2. 在新的變數值(陣列/物件)上作處理
          // 3. 設定回原本的狀態中

          //1 //2
          const newData = [newObj, ...data]

          //3
          setData(newData)
        }}
      >
        陣列最前面新增一個物件值id為99與文字為xxx的物件
      </button>
      <br />
      <button
        onClick={() => {
          const newObj = { id: 88, text: 'yyy' }

          //1 //2
          const newData = [...data, newObj]

          //3
          setData(newData)
        }}
      >
        陣列最後面新增一個物件值id為88與文字為yyy的物件
      </button>
      <br />
      <button
        onClick={() => {
          const newData = data.filter((v, i) => {
            return v.text.includes('a')
          })

          //3
          setData(newData)
        }}
      >
        尋找(過濾)只呈現所有文字有a字母的
      </button>
      <br />
      <button
        onClick={() => {
          const newData = data.filter((value, index) => {
            return value.text !== 'b'
          })
          setData(newData)
        }}
      >
        刪除文字為b的物件
      </button>
      <br />
      <button
        onClick={() => {
          const newData = data.filter((value, index) => {
            return value.id !== 99
          })
          setData(newData)
        }}
      >
        刪除id為99的物件
      </button>
      <br />
      <button
        onClick={() => {
          //建議要插入的物件
          const newObj = { id: 5, text: 'bbb' }
          //找到id=2的物件索引值
          const index = data.findIndex((value, index) => {
            return value.id === 2
          })
          if (index !== -1) {
            //在索引位置處,分割成兩個子陣列
            //[1,2,3,4]=>[1,2] [3,4] >> slice(0,index+1) slice(index+1)

            const aa = data.slice(0, index + 1)
            const bb = data.slice(index + 1)
            //插入新物件,合併為新陣列
            const newData = [...aa, newObj, ...bb]
            //設定回原狀態
            setData(newData)
          }
        }}
      >
        在id為2後面插入id為5與文字為bbb的物件
      </button>
      <br />
      <button
        onClick={() => {
          //找到id=3的索引值
          const index = data.findIndex((value, index) => {
            return value.id === 3
          })
          //如果有找到時
          if (index !== -1) {
            const newData = data.map((value, index) => {
              //可拷貝到多一層物件的語法
              return { ...value }
            })

            //常見最簡單的深拷貝語法
            //const newData2 = JSON.parse(JSON.stringify(data)
            //console.log(newData)
            newData[index].text = 'cccc'

            setData(newData)
          }
        }}
      >
        取代id為3的文字為cccc
      </button>
    </>
  )
}

export default Demo
