import './Menu.css'
import React, { useState } from 'react'

function Menu() {
  const menus = ['首頁', '關於我們', '產品']
  const [activeMenu, setActiveMenu] = useState('')

  return (
    <ul>
      {menus.map((v, i) => {
        return (
          <li
            key={i}
            onClick={() => {
              setActiveMenu(v)
            }}
          >
            <a href="#/" className={activeMenu === v ? 'active' : ''}>
              {v}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default Menu
