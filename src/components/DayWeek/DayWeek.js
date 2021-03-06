import React, {Component} from 'react'
import './../../scss/dayweek.scss'
import DataDayWeek from './DataDayWeek/DataDayWeek'
import TimeDayWeek from './TimeDayWeek/TimeDayWeek'
import ChoiceTypeView from './ChoiceTypeView/ChoiceTypeView';

class DayWeek extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="day-week">
        <ChoiceTypeView/>
        <DataDayWeek ></DataDayWeek>
        <TimeDayWeek />
      </div>
    )
  }

}
export default DayWeek;
