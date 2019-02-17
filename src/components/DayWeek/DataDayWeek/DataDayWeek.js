import React, {Component} from 'react'
import moment from 'moment'
import './DataDayWeek.scss'

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
        {/*<div className='left-arrow' onClick={this.onClickPrevDay.bind(this)}>
          <i className="fas fa-angle-left"></i>
        </div>*/}
        <div className="week">
          <div className="week-day">
            <div className="title-week-day">ПН 14</div>
            <div className="number-week-day">Фев</div>
          </div>
          <div className="week-day">
            <div className="title-week-day">ПН 14</div>
            <div className="number-week-day">Фев</div>
          </div>
          <div className="week-day active">
            <div className="title-week-day">ПН 14</div>
            <div className="number-week-day">Фев</div>
            <div className="triangle"></div>
          </div>
          <div className="week-day">
            <div className="title-week-day">ПН 14</div>
            <div className="number-week-day">Фев</div>
          </div>
          <div className="week-day">
            <div className="title-week-day">ПН 14</div>
            <div className="number-week-day">Фев</div>
          </div>
        </div>
        {/*<div className='current-time'>
          {this.state.today.format('ll')}
        </div>*/}
        {/*<div className='right-arrow' onClick={this.onClickNextDay.bind(this)}>
          <i className="fas fa-angle-right"></i>
        </div>*/}
      </div>
    )
  }
}
export default DataDayWeek;
