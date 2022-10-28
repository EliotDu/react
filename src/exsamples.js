import Counter from './ex-1025-2/Counter'
import JsxValue from './ex-1026-1/JsxValue'
import StudentList from './ex-1026-2/StudentList'
import Demo from './ex-1026-3/Demo'
import Menu from './practice/Menu'
import Parent from './ex-1027-1/Parent'
import ParentPropTypes from './ex-1027-2/Parent'
import ParentDataFlow from './ex-1027-3/Parent'
import ParentTest from './ex-1027-3/ParentTest'
import InputDemo from './ex-1028-1/InputDemo'
export const exsamples = [
  {
    name: '1025-1 計數器',
    path: './ex-1025-2/Counter',
    component: Counter,
  },
  {
    name: '1026-1 JSX中的值與表達式',
    path: './ex-1026-1/JsxValue',
    component: JsxValue,
  },
  {
    name: '1026-2 學生列表清單(map-key)',
    path: './ex-1026-2/StudentList',
    component: StudentList,
  },
  {
    name: '1026-3 陣列物件狀態處理練習',
    path: './ex-1026-3/Demo',
    component: Demo,
  },
  {
    name: '1026  選單項目狀態',
    path: './practice/Menu',
    component: Menu,
  },
  {
    name: '1027-1  props狀態練習',
    path: './ex-1027-1/Parent',
    component: Parent,
  },
  {
    name: '1027-2  propTypes型別檢查',
    path: './ex-1027-2/Parent',
    component: ParentPropTypes,
  },
  {
    name: '1027-3  DataFlow 三種資料流',
    path: './ex-1027-3/Parent',
    component: ParentDataFlow,
  },
  {
    name: '1027-4  DataFlow 三種資料流(測試)',
    path: './ex-1027-3/ParentTest',
    component: ParentTest,
  },
  {
    name: '1028-1  可控與不可控表單元件',
    path: './ex-1028-1/InputDemo',
    component: InputDemo,
  },
]
