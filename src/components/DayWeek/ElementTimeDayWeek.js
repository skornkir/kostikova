import React from 'react'

const ElementTimeDayWeek = (props) => {
  return (
    <div className="time-day-week">
      <div className="time">
        <div className="hours">{props.hours}</div>
        <div className="minutes">{props.minutes}</div>
      </div>
      <div className="surname">{props.surname}</div>
    </div>
  )
}
export default ElementTimeDayWeek;
