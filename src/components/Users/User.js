import React, {Component} from 'react'
import './addprofile.scss'

class User extends Component {
  /*constructor(props) {
    super(props);
  }*/

  render() {
    return (
      <div className="user">
        <div className="bg-user-img">

        </div>
        <div className="user-img">
          <img alt="" src={require('./../../images/user-profile.jpg')} />
        </div>
        <div className="title">
          <h2>{this.props.surname + ' ' + this.props.name}</h2>
        </div>
        <div className="widgets">
          <div className="widget kkal-wrapper">
            <div className="kkal">
              <div>1440</div>
              <div>кал</div>
            </div>
          </div>
          <div className="widget weight">
            <span>65</span>
          </div>
          <div className="widget training">
            <span>9/10</span>
          </div>
        </div>
      </div>
    )
  }
}

export default User;
