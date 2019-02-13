import React, {Component} from 'react'
import moment from 'moment'

class DataDayWeek extends Component{

  constructor(props) {
    super(props);
    this.state = {
      today:  moment()
    }
  }

  onClickNextDay(){
    this.setState(
      {today: this.state.today.add('1','days')}
    )
  }

  onClickPrevDay(){
    this.setState(
      {today: this.state.today.subtract('1','days')}
    )
  }

  render(){
    return (
      <div className="data-day-week">
        <div className='left-arrow' onClick={this.onClickPrevDay.bind(this)}>
          <i className="fas fa-angle-left"></i>
        </div>
        <div className='current-time'>
          {this.state.today.format('ll')}
        </div>
        <div className='right-arrow' onClick={this.onClickNextDay.bind(this)}>
          <i className="fas fa-angle-right"></i>
        </div>
      </div>
    )
  }
}
export default DataDayWeek;
