import React, {Component} from 'react'
import ElementTimeDayWeek from '../ElementTimeDayWeek';
import './TimeDayWeek.scss'

class TimeDayWeek extends Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    const schedule = [
      {hours: 10, minutes: '00', surname: 'Гвоздева Галина'},
      {hours: 11, minutes: '00', surname: 'Куклин Антон'},
      {hours: 12, minutes: '00', surname: 'Невзоров Алексей'},
      {hours: 13, minutes: '00', surname: 'Шрек Полина'},
      {hours: 14, minutes: '00', surname: 'Дубнова Ольга'},
      {hours: 15, minutes: '00', surname: 'Свободно'},
      {hours: 16, minutes: '00', surname: 'Седых Григорий'},
      {hours: 17, minutes: '00', surname: 'Гвоздева Галина'},
      {hours: 18, minutes: '00', surname: 'Свободно'},
      {hours: 19, minutes: '00', surname: 'Гвоздева Галина'},
      {hours: 20, minutes: '00', surname: 'Гвоздева Галина'},
    ];
    const elements = schedule.map((element, index) => {
      return <ElementTimeDayWeek key={index} surname={element.surname} minutes={element.minutes} hours={element.hours}/>
    });
    console.log(elements)
    return (
      <div className="time-day-week-container">
        {elements}
       {/* <div className="time-day-week">
          <div className="time">
            <div className="hours">10</div>
            <div className="minutes">00</div>
          </div>
          <div className="surname">Гвоздева Галина</div>
        </div>
        <div className="time-day-week">
          <div className="time">
            <div className="hours">11</div>
            <div className="minutes">00</div>
          </div>
          <div className="surname">Гвоздева Галина</div>
        </div>
        <div className="time-day-week">
          <div className="time">
            <div className="hours">12</div>
            <div className="minutes">00</div>
          </div>
          <div className="surname">Гвоздева Галина</div>
        </div>
        <div className="time-day-week">
          <div className="time">
            <div className="hours">13</div>
            <div className="minutes">00</div>
          </div>
          <div className="surname">Свободно</div>
        </div>
        <div className="time-day-week">
          <div className="time">
            <div className="hours">14</div>
            <div className="minutes">00</div>
          </div>
          <div className="surname">Гвоздева Галина</div>
        </div>
        <div className="time-day-week">
          <div className="time">
            <div className="hours">15</div>
            <div className="minutes">00</div>
          </div>
          <div className="surname">Гвоздева Галина</div>
        </div>
        <div className="time-day-week">
          <div className="time">
            <div className="hours">15</div>
            <div className="minutes">00</div>
          </div>
          <div className="surname">Гвоздева Галина</div>
        </div>
        <div className="time-day-week">
          <div className="time">
            <div className="hours">16</div>
            <div className="minutes">00</div>
          </div>
          <div className="surname">Гвоздева Галина</div>
        </div>
        <div className="time-day-week">
          <div className="time">
            <div className="hours">17</div>
            <div className="minutes">00</div>
          </div>
          <div className="surname">Гвоздева Галина</div>
        </div>
        <div className="time-day-week">
          <div className="time">
            <div className="hours">18</div>
            <div className="minutes">00</div>
          </div>
          <div className="surname">Гвоздева Галина</div>
        </div>*/}
      </div>
    )
  }

}
export default TimeDayWeek;
