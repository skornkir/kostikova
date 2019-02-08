import React from 'react'

const ElementTimeDayWeek = (props) => {
  return (
    <div className="element-time-day-week">
      <div className="time">{props.time}</div>
      <div className="body">
        <div className="fio">{props.fio}</div>
        <div className="club">{props.club}</div>
      </div>
    </div>
  )
}
export default ElementTimeDayWeek;
