import React, { Component } from 'react';
import Header from './Product/Header';
import ProductList from './Product/ProductList'
import Search from './Search'
class App extends Component {
  constructor(props){
    super();
    this.state={
      counter:0,
      
      searchQuery:''//to search movies

    }
    this.handleOnChangeText = this.handleOnChangeText.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleOnChangeText(data){
    
       let currentstate = this.state;
       
       
       currentstate.searchQuery = data;
       
       this.setState(currentstate);
       
     }
    handleAdd(){
      let currentstate = this.state;
      
      currentstate.counter++;
      this.setState(currentstate);
    }
    handleRemove(){
      let currentstate = this.state;
      if(currentstate.counter ===0){
        this.setState(currentstate);
      }else{
        currentstate.counter--;
        this.setState(currentstate);
      }
    }
  render() {
    return (
      <div className="App">
       <Header add={this.state.counter}/>
       <Search textbox={this.handleOnChangeText}/>
       <ProductList count={this.handleAdd} remove={this.handleRemove} search={this.state.searchQuery}/>
      </div>
    );
  }
}

export default App;
//importing Header from child
//importing Card from child