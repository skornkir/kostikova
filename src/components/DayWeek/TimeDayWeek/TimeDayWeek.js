import React, {Component} from 'react'
import ElementTimeDayWeek from '../ElementTimeDayWeek';

class TimeDayWeek extends Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
  /*  const schedule = this.props.schedule.map((element, key) => {
      return (<ElementTimeDayWeek key={key} time={element.time} fio={element.fio} club={element.club} />)
    })*/
    const schedule = ''
    return (
      <div className="time-day-week">
        {schedule}
      </div>
    )
  }

}
export default TimeDayWeek;
