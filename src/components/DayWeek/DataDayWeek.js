import React from 'react'

const DataDayWeek = (props) => {
  return (
    <div className="data-day-week">
      <div className='left-arrow'>
        <i className="fas fa-angle-left"></i>
      </div>
      <div className='current-time'>
        {props.day}
      </div>
      <div className='right-arrow'>
        <i className="fas fa-angle-right"></i>
      </div>
    </div>
  )
}
export default DataDayWeek;
