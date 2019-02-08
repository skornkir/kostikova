import React from 'react'
import ElementTimeDayWeek from './ElementTimeDayWeek';

const TimeDayWeek = (props) => {
  const schedule = props.schedule.map((element, key) => {
    return (<ElementTimeDayWeek key={key} time={element.time} fio={element.fio} club={element.club} />)
  })
  return (
    <div className="time-day-week">
      {schedule}
    </div>
  )
}
export default TimeDayWeek;
