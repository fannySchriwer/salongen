import React, { Component } from 'react';
import '../App.css';
import salons from '../db/salons.json';

class SalonDetails extends Component {
  constructor(props) {
		super(props);

		this.state = {
			salonData: []
		}
	}
  
  goBack = () => {
    this.props.history.goBack();
  }

	render() {
    const salonData = [];
    const matchId = parseInt(this.props.match.params['id']);

		salons['data'].map((salon) => {
			if(salon.id === matchId) {
				salonData.push(salon);
      }
      return salonData;
    });

    return (
      <div class="page-wrapper">
        <section className="hero-image">
          <div className="hero-top-bar">
            <button onClick={this.goBack}><img className="go-back-arrow" src="/assets/white-arrow-left.svg" alt="back"/></button>
            <img src="/assets/heart-outlined.svg" alt="heart" />
          </div>
          <div className="salon-review">
            <h3>{salonData[0].name}</h3>
            <div className="rating-stars">
              <img src="/assets/star-filled.svg" alt="star"/>
              <img src="/assets/star-filled.svg" alt="star" />
              <img src="/assets/star-filled.svg" alt="star" />
              <img src="/assets/star-filled.svg" alt="star" />
              <img src="/assets/star-outlined.svg" alt="star" />
              <p className="small-text">(32)</p>
            </div>
          </div>
        </section>
        <section className="row">
          <div className="info-tab cell active">
            <p>Info</p>
          </div>
          <div className="info-tab cell">
            <p>Schema</p>
          </div>
        </section>
        <section className="break"></section>
        <section className="salon-info wrapper">
          <div className="row">
            <img className="icon" src="/assets/pin.svg" alt="pin" />
            <p>{salonData[0].adress}</p>
          </div>
          <div className="row">
            <img className="icon" src="/assets/clock.svg" alt="clock" />
            <p>Öppet till 19:00 idag</p>
            <img src="/assets/arrow-down.svg" alt="down" />
          </div>
          <div className="row">
            <img className="icon" src="/assets/phone.svg" alt="phone" />
            <p>{salonData[0].phone}</p>
          </div>
          <div className="row">
            <img className="icon" src="/assets/globe.svg" alt="globe" />
            <p>{salonData[0].homepage}</p>
          </div>
          <div className="description">
            <p>{salonData[0].description}</p>
          </div>
        </section>
      </div>
    );
  }
}

export default SalonDetails;
