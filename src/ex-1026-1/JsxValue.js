function JsxValue() {
  return (
    <>
      <h1>Jsx中的值與表達式</h1>
      <hr />
      <h2>Number</h2>
      {123 - 99}
      <br />
      {NaN}
      <h2>String</h2>
      {'abc'}
      <br />
      {`total=${1207 - 7}`}
      <h2>Boolean</h2>
      {`${100 > 5}`}
      {true}
      {false}
      <h2>null</h2>
      {null}
      <h2>undefined</h2>
      {undefined}
      <h2>Array</h2>
      {[1, 2, 3, 4]}
      <h2>Obj</h2>
      {/* {會有中斷錯誤} */}
      {/* {{ a: 1, b: 2 }} */}
      <h2>Function</h2>
      {() => {}}
    </>
  )
}
export default JsxValue
