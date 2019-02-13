import React, {Component} from 'react'
import './../../scss/dayweek.scss'
import DataDayWeek from './DataDayWeek'
import TimeDayWeek from './TimeDayWeek'

class DayWeek extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="day-week">
        <DataDayWeek ></DataDayWeek>
        <TimeDayWeek />
      </div>
    )
  }

}
export default DayWeek;
