//部分導入要使用{}
//import { data } from './data/student'
//JSON檔案導入時會自動轉成js的資料類型值
import jsonData from './data/student.json'

function StudentList() {
  console.log(jsonData)

  return (
    <>
      <h1>學生資料清單</h1>
      <ul>
        {/*key值的選擇
            1.資料來自資料庫，優先使用資料庫的key(主鍵/外鍵)當key值
            2.資料並非來自資料庫，可先在資料初始化時使用UUID或NANOID的函式庫產生key值，
            注意不要寫在return中
            3.資料為靜態資料(意指在應用程式中完全不會更動)時，
            才能使用索引值當key值
        */}
        {jsonData.map((value, index, array) => {
          return <li key={value.id}>{value.name}</li>
        })}
      </ul>
    </>
  )
}
export default StudentList
