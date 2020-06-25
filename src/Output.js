import React from 'react';
import './Output.css'

class Output extends React.Component {

  render () {
    return(
      <div className="Output">
        {this.props.result === "" ?
          <p className="Output-def">Ans</p> :
          <p>{this.props.result}</p>
        }
      </div>
    );
  }
}

export default Output;
