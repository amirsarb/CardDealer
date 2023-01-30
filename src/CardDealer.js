/**
 * @author Amir Sarbazi
 * @email [amir.sarbazi@gmail.com]
 * @create date 2023-01-30 
 * @desc [This is a dealer card game 
 * You can practice axios, componentDidMount , componentDidUpdate
 * API for card provided by : https://deckofcardsapi.com/api/deck/new/shuffle/
 **/
import React, { Component } from 'react'
import './CardDealer.css'
import axios from 'axios';
import Card from './Card'
import { v4 as uuidv4 } from 'uuid';
class CardDealer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deck_id: undefined,
      remaining: undefined,
      images: []
    }

    this.getCard = this.getCard.bind(this)
    this.getRandomDegree = this.getRandomDegree.bind(this)

  }// End Constructor


  getCard(id) {

    axios.get(`https://deckofcardsapi.com/api/deck/${id}/draw/`)
      .then(res => {
        const card = res.data['cards'];


        let currentImage = card.map(e => e.images.png)

        this.setState({ images: [...this.state.images, currentImage] });

      })

  }

  getRandomDegree() {

    var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    // Random degree between 0 and 20
    return plusOrMinus * Math.floor(Math.random() * 20)
    // this.setState({degree:deg})
  }

  componentDidMount() {
    axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/`)
      .then(res => {
        const cards = res.data;
        this.setState({ deck_id: cards.deck_id, remaining: cards.remaining });
      })
  }

  render() {


    return (
      <div className='GreenTable'>
        <div>
          <button onClick={() => this.getCard(this.state.deck_id)} className='button'>Get Card</button>


        </div>
        <div className='container'>
          {this.state.images.map(item => <Card key={uuidv4()} src={item} degree={this.getRandomDegree()} />)}

        </div>
      </div>

    )
  }


}
export default CardDealer