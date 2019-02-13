import React, {Component} from 'react'
import Logo from  './Logo'
import MainMenu from './MainMenu/MainMenu'

class Header extends Component {

  constructor(props){
    super(props)
    this.state = {
      elements: [
        {title: 'Расписание'},
        {title: 'Рецепты'},
        {title: 'Контакты'}
      ]
    }
  }

  render() {
    return (
      <div className="wrapper-header">
        <div className="header">
          <Logo></Logo>
          <MainMenu elements={this.state.elements}></MainMenu>
        </div>
      </div>
     )
  }
}

export default Header;
