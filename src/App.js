import React from 'react';
import './App.css';
import Buttons from './Buttons.js';
import Output from './Output.js';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      result : ""
    }
  }

  formExpression = (b) => {
    if(this.state.result === "error"){
      this.setState({
        result: ""
      })
    }
    this.setState(prevState => ({
      result : prevState.result + b
    }));
  }

  evaluate = () => {
      try {
        this.setState({
              result: eval(this.state.result).toFixed(2).toString()
        })
      } catch (e) {
        this.setState({
              result: "error"
        })
      }
  };

  reset = () => {
      this.setState({
          result: ""
      })
  };

  ceFunc = () => {
    this.setState(prevState => ({
      result : prevState.result.slice(0,-1)
    }));
  };

  onClick = b => {

      if(b === "="){
          this.evaluate()
      }
      else if(b === "C"){
          this.reset()
      }
      else if(b === "CE"){
          this.ceFunc()
      }
      else {

        if(isNaN(b) && b!=='(' && b!==')'){
          var prev = this.state.result.substr(-1)
          if(isNaN(prev)){
            this.ceFunc();
          }
        }
        this.formExpression(b)
      }
  };

  render () {
    return(
      <div className="App">
        <h1 clasName="App-header">Calculator</h1>
        <div className="App-calc">
          <Output result={this.state.result}/>
          <Buttons onClick={this.onClick}/>
        </div>

      </div>
    );
  }
}

export default App;
