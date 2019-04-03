import React, { Component } from 'react';


class Header extends Component {
  constructor(props){
    console.log(props)
    super(props)
  }
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-light bg-light">
          Cars {this.props.add}
        </nav>
      </div>
    );
  }
}

export default Header;
