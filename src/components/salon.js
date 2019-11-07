import React, { Component } from 'react';
import '../App.css';

class Salon extends Component {
  render() {
		
    return (
			<div className="salon-row wrapper">
        <div className="cell">
          <p className="bold-text">12.00</p>
        </div>
        <div className="double-cell">
          <h3>{this.props.salon.name}</h3>
          <div className="rating-stars">
            <img src="/assets/star-filled.svg" alt="star"/>
            <img src="/assets/star-filled.svg" alt="star" />
            <img src="/assets/star-filled.svg" alt="star" />
            <img src="/assets/star-filled.svg" alt="star" />
            <img src="/assets/star-outlined.svg" alt="star" />
            <p className="small-grey-text">(32)</p>
          </div>
          <p className="small-grey-text">{this.props.salon.adress}</p>
        </div>
        <div className="double-cell align-right">
          <p className="bold-text">{this.props.salon.price} kr</p>
          <p className="small-grey-text">30 min</p>
        </div>
        <div className="cell align-right vertical-center">
          <img src="/assets/arrow-right.svg" alt="down" />
        </div>	
			</div>
    );
  }
}

export default Salon;