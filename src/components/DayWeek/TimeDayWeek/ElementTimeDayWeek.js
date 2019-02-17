import React, {Component} from 'react'

class ElementTimeDayWeek extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="time-day-week">
        <div className="time">
          <div className="hours">{this.props.hours}</div>
          <div className="minutes">{this.props.minutes}</div>
        </div>
        <div className="surname">{this.props.surname}</div>
      </div>
    )
  }
}

export default ElementTimeDayWeek;
