import React from 'react'
import './../../scss/dayweek.scss'
import DataDayWeek from './DataDayWeek'
import TimeDayWeek from './TimeDayWeek'

const day = 'Пн, 3 января'
const scheduleDay = [
  {time: '7:00', fio: 'Костикова Кристина', club: 'Фитнес-система'},
  {time: '8:00', fio: 'Гаврилов Олег', club: 'Фитнес-система'},
  {time: '9:00', fio: 'Павлова Полина', club: 'Фитнес-система'},
  {time: '10:00', fio: 'Псарёв Ромам / Псарёв Егор', club: 'Фитнес-система'},
  {time: '11:00', fio: 'Бурмистрова Ксения', club: 'Фитнес-система'},
  {time: '12:00', fio: 'Ветрова Валентина', club: 'Фитнес-система'},
  {time: '13:00', fio: 'Ширакян Роберт', club: 'Фитнес-система'},
  {time: '14:00', fio: 'Огурчиков Дмитрий', club: 'Фитнес-система'},
  {time: '15:00', fio: 'Свободно', club: ''},
  {time: '16:00', fio: 'Свободно', club: ''},
  {time: '17:00', fio: 'Свободно', club: ''},
  {time: '18:00', fio: 'Седых Дмитрий', club: 'Фитнес-система'},
]

const DayWeek = (props) => {


  return (
    <div className="day-week">
      <DataDayWeek day={day}></DataDayWeek>
      <TimeDayWeek schedule={scheduleDay}/>
    </div>
  )
}
export default DayWeek;
