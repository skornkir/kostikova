import React, {Component} from 'react'
import Logo from '../Logo'
import MainMenu from '../MainMenu/MainMenu'
import './header.scss'

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
          <div className="login">
            <img src="./images/login.png" />
          </div>
        </div>
      </div>
     )
  }
}

export default Header;
