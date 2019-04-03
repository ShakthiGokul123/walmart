import React, { Component } from 'react';
import Header from './Product/Header';
import ProductList from './Product/ProductList'
import Search from './Search'
class App extends Component {
  constructor(props){
    super();
    this.state={
      number:0,
      
      searchQuery:''//to search movies

    }
    this.handleOnChangeText = this.handleOnChangeText.bind(this);
  }
  handleOnChangeText(data){
    
       let currentstate = this.state;
       
       
       currentstate.searchQuery = data;
       
       this.setState(currentstate);
       
     }
     handleEventFormAdd(data){
       let incrementnumber = this.state;
       incrementnumber.number = data;
       this.setState(incrementnumber);
     }
     handleEventFormRemove(data){
       let decrementNumber = this.data;
       decrementNumber.number = data;
       this.setState(decrementNumber);
       
     }
  render() {
    return (
      <div className="App">
       <Header/>
       <Search textbox={this.handleOnChangeText}/>
       <ProductList search={this.state.searchQuery}/>
      </div>
    );
  }
}

export default App;
//importing Header from child
//importing Card from child