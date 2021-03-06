import React, { Component } from 'react';
import Button from '../Button';


class Card extends Component {
    constructor(props){
        console.log(props);
        super(props);
        
        
 }
  render() {
      
    return (
      <div className="App">
                <div className="card">
            <img className="card-img-top" src={this.props.details.mediumImage} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title" >{this.props.details.name}</h5>
                <h5 className="card-title" >price = $ {this.props.details.salePrice}</h5>
                <p className="card-text">shortDescription :{this.props.details.shortDescription}</p>
              <Button add={this.props.add} remove={this.props.remove}/>
                
            </div>
            </div>
      </div>
    );
  }
}

export default Card;
