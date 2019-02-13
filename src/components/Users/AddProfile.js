import React, {Component} from 'react'
import './addprofile.scss'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import axios from 'axios'
import {NotificationContainer, NotificationManager} from 'react-notifications';

class AddProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      surname: '',
      name: '',
      phone: '',
      birthday: '',
      weight: '',
      height: '',
      goal: ''
    }
  }

  onSubmit(event){
    event.preventDefault();
    const user = {
      surname: this.surname.value,
      name: this.name.value,
      phone: this.phone.value,
      birthday: this.birthday.value,
      weight: this.weight.value,
      height: this.height.value,
      goal: this.goal.value
    }
    console.log(JSON.stringify(user))
    const url = "http://localhost:5000/user"
    console.log(user)

    axios.post(url, user)
      .then( (response) => {
        NotificationManager.success('Клиент добавлен', '');
        console.log(response);
        this.surname.value = ''
        this.name.value = ''
        this.phone.value = ''
        this.birthday.value = ''
        this.weight.value = ''
        this.height.value = ''
        this.goal.value = ''
      })
      .catch(function (error) {
        console.log(error);
      });

    /*axios.post(url, {
      user: JSON.stringify(user)
    })
      .then((response)=>{
        console.log(response)
      })
      .catch((e) => {
        console.log(e)
      })*/
  }

  render() {
    return (
      <div className="wrapper-content wrapper-add-profile">
        <div className="add-profile">
          <form onSubmit={this.onSubmit.bind(this)}>
            <h2>Добавить клиента</h2>
            <div className="container-textfields">
              <TextField inputRef={e => this.surname = e}  name='surname' label='Фамилия' margin='normal' />
              <TextField inputRef={el => this.name = el} name='name' label='Имя' margin='normal' />
              <TextField inputRef={el => this.phone = el} name='phone' label='Телефон' margin='normal' />
              <TextField inputRef={el => this.birthday = el} name='birthday' label='Дата рождения' margin='normal' />
              <TextField inputRef={el => this.weight = el} name='weight' label='Вес' margin='normal' />
              <TextField inputRef={el => this.height = el} name='height' label='Рост' margin='normal' />
              <TextField inputRef={el => this.goal = el} name='goal' label='Цель' margin='normal' className="goal-textfield" />
            </div>
            <Button type="submit" variant="contained" color="primary" className="add-user-button">
              Добавить
            </Button>
          </form>
        </div>
        <NotificationContainer/>
      </div>
    )
  }
}

export default AddProfile;
