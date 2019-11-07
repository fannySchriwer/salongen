import React, { Component } from 'react';
import '../App.css';
import salons from '../db/salons.json';
import Salon from './salon';
import { Link } from 'react-router-dom';

const priceOptions = [
	{ label: "visa alla", value: 0 },
  { label: "0 - 249 kr", value: 1 },
  { label: "250 - 499 kr", value: 2 },
  { label: "500 - 999 kr", value: 3 },
  { label: "1000 kr -", value: 4 }
];

class SalonList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: 0,
			salons: []
		}
	}
	
	componentDidMount() {	
		const option = parseInt(localStorage.getItem('filterValue'));
		this.setState({ value : option, salons: salons['data']}, () => {});
		this.filterSalonsByPrice(option);
	}

  handleChange = option => {
		let optionInt = 0;
		localStorage.setItem('filterValue', option.target.value);
		optionInt = parseInt(localStorage.getItem('filterValue'));
		this.filterSalonsByPrice(optionInt);	
	};

	filterSalonsByPrice(optionInt) {
		const filteredSalons = salons['data'].filter((salon) => {
			if(optionInt === 1) {
				if(salon.price > 0 && salon.price < 250) {
					return salon
				}
			}
			if(optionInt === 2) {
				if(salon.price >= 250 && salon.price < 500) {
					return salon
				}
			}
			if(optionInt === 3) {
				if(salon.price >= 500 && salon.price <= 999) {
					return salon
				}
			}
			if(optionInt === 4) {
				if(salon.price > 1000) {
					return salon
				}
			} else if(optionInt === 0) {
				return salon
			} 
		});
		
		this.setState({ value: optionInt, salons: filteredSalons }, () => {});
	}

  render() {
    return (
      <div className="App">
				<div className="topbar">
					<img className="go-back-arrow" src="/assets/arrow-left.svg" alt="back"/>
					<h2>Hår</h2>
					<img src="/assets/filter-icon.svg" alt="filter" />
				</div>
				<div className="filter-row">
					<label>Pris&nbsp;</label>
						<select
							value={this.state.value}
							id="priceRangeSelect"
							name="priceRangeSelect"
							className="filter-select"
							onChange={this.handleChange} >
							{priceOptions.map(item => (
								<option key={item.value} value={item.value}>
									{item.label}
								</option>
							))}
						</select>
					</div>
					{this.state.salons.map(salon => (
						<Link to={`/salon-details/${salon.id}`} key={salon.id}><Salon salon={salon} /></Link>
					))}	
			</div>
    );
  }
}

export default SalonList;