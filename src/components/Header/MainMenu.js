import React from 'react'
import ElementMenu from './ElementMenu'

const MainMenu = (props) => {

  const elements = props.elements.map((element, key) => {
    return (<ElementMenu key={key} title={element.title}></ElementMenu>)
  })

  return (
    <ul className="mainmenu">
      {elements}
    </ul>
  )
}
export default MainMenu;
