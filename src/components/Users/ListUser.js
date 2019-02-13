import React, {Component} from 'react'
import axios from 'axios'
import Preloader from '../Common/Preloader'
import User from './User'

class ListUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      users: []
    }
  }

  componentDidMount() {
    const url = "http://localhost:5000/users"
    this.setState({loading: true})
    axios.get(url)
      .then( (response) => {
        this.setState({users: response.data, loading: false})
      })
      .catch(function (e) {
        console.log(e)
      })
  }

  render() {
    let content =  <Preloader></Preloader>
    if(!this.state.loading){
      content = this.state.users.map( user =>{
        return (<User key={user._id} surname={user.surname} name={user.name} />)
      })
    }

    return (
      <div className="list-users">
        {content}
      </div>
    )
  }
}

export default ListUser;
