import React from 'react'
import './Buttons.css'

class Buttons extends React.Component {
  static defaultProps = {
    buttons : [
      ['C', 'CE', '/', '*'],
      ['7', '8' , '9', '-'],
      ['4', '5' , '6', '+'],
      ['1', '2' , '3', '.'],
      ['(' ,')' , '0', '=']
    ]
  }
  render () {
    return(
      <div className="Buttons">
        {this.props.buttons.map(brow =>
            <div className="Buttons-row">
              {brow.map(b =>
                <button className="Button" value={b} onClick={(e) => this.props.onClick(e.target.value)}>{b}</button>
              )}
            </div>
        )}
      </div>
    );
  }
}

export default Buttons;
