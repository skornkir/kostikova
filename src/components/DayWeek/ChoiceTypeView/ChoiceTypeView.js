import React, {Component} from 'react'
import "./ChoiceTypeView.scss"

class ChoiceTypeView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="choice-type-view">
        <div className="active choice choice-day">День</div>
        <div className="choice choice-week">Неделя</div>
      </div>
    )
  }
}

export default ChoiceTypeView;
