import React, { useState } from 'react'
//BMI = 體重(公斤) / 身高2(公尺平方)
function Bmi() {
  const [weight, setWeight] = useState()
  const [height, setHeight] = useState()
  const [bmi, setBmi] = useState(0)
  return (
    <>
      <div>
        <label>請輸入體重: </label>
        <input
          type="number"
          name="weight"
          value={weight}
          onChange={(e) => {
            const weightValue = e.target.value
            setWeight(weightValue)
          }}
        />
        <br />
        <label>請輸入身高: </label>
        <input
          type="number"
          name="height"
          value={height}
          onChange={(e) => {
            const heightValue = e.target.value
            setHeight(heightValue)
          }}
        />
        <br />

        <button
          value={bmi}
          onClick={() => {
            if (weight < 10 || height < 100) {
              alert('身高或體重輸入有，請重新輸入')
              return
            }
            const calc = weight / Math.pow(height / 100, 2)
            setBmi(calc)
          }}
        >
          點我計算
        </button>
        <h4>你的BMI為:{bmi.toFixed(1)}</h4>
      </div>
    </>
  )
}

export default Bmi
