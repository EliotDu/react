import { useState } from 'react'

function EditForm({ id, updateTodo, text }) {
  const [isComposition, setIsComposition] = useState(false)
  // 使用衍生的props作為state初始值
  //一般而言，props應避免作為state初始值，除非你只需要在內部狀態初始化而已,而且之後props值不會再被更動，或是元件不需要再反應其它的更動時。
  const [inputEditingValue, setInputEditingValue] = useState(text)

  return (
    <>
      <input
        type="text"
        value={inputEditingValue}
        onChange={(e) => {
          setInputEditingValue(e.target.value)
        }}
        onKeyDown={(e) => {
          // 中文輸入期間不會加入到列表中
          if (e.key === 'Enter' && isComposition === false) {
            updateTodo(id, {
              text: inputEditingValue,
              editing: false,
            })
          }
        }}
      />
    </>
  )
}

export default EditForm
