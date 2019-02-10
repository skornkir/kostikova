import React, {Component} from 'react'
import './addprofile.scss'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class AddProfile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper-content wrapper-add-profile">
        <div className="add-profile">
          <form>
            <h2>Добавить клиента</h2>
            <div className="container-textfields">
              <TextField name='surname' label='Фамилия' margin='normal' />
              <TextField name='name' label='Имя' margin='normal' />
              <TextField name='phone' label='Телефон' margin='normal' />
              <TextField name='birthday' label='Дата рождения' margin='normal' />
              <TextField name='weight' label='Вес' margin='normal' />
              <TextField name='height' label='Рост' margin='normal' />
              <TextField name='goal' label='Цель' margin='normal' className="goal-textfield" />
            </div>
            <Button variant="contained" color="primary" className="add-user-button">
              Добавить
            </Button>
          </form>
        </div>
      </div>
    )
  }
}

export default AddProfile;
