import React from 'react'
import './addprofile.scss'
import Header from '../Header/Header';
import ListUser from './ListUser'

const ListUserPage = (props) => {


  return (
    <div className="list-user-wrapper">
      <Header />
      <ListUser />
    </div>
  )
}
export default ListUserPage;
