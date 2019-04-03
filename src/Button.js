import React, { Component } from 'react';


class Button extends Component {
    constructor(props){
        console.log(props);
        super(props);
        
        
 }
  render() {
      
    return (
      <div className="App">
              <button onClick={()=>{
                  this.props.add();
              }}>Add</button>
              <button onClick={()=>{
                  this.props.remove();
              }}>Remove</button>
      </div>
    );
  }
}

export default Button;
