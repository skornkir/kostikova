import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './MainMenu.scss'

class MainMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
  }

  clickMainMenu(){
    this.setState({active: !this.state.active})
  }

  render() {
    let classMenu = 'container-menu'
    if(this.state.active){
      classMenu += ' change'
    }
    let classMenuBody = 'mobile-nav-body'
    if(this.state.active){
      classMenuBody += ' active'
    }
    return (
      <div className="main-menu">
        <div className={classMenu} onClick={this.clickMainMenu.bind(this)}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <div className={classMenuBody}>
            <ul className="menu">
              <li className="">
                <Link to="/" className=" active">Расписание</Link>
              </li>
              <li className="">
                <Link to="/users" className=" ">Клиенты</Link>
              </li>
              <li className="">
                <Link to="/user/add" className=" ">Добавить клиента</Link>
              </li>
              <li className="">
                <Link to="/login" className="">Войти</Link>
              </li>
            </ul>
        </div>
      </div>
    )
  }
}

export default MainMenu;
