/**
 * @author Amir Sarbazi
 * @email [amir.sarbazi@gmail.com]
 * @create date 2023-01-30 
 * @desc [This is a dealer card game 
 * You can practice axios, componentDidMount , componentDidUpdate
 * API for card provided by : https://deckofcardsapi.com/api/deck/new/shuffle/
 */
import React, { Component } from 'react'
import './Card.css'

class Card extends Component {

    constructor(props) {
        super(props)
        this.state = {
            degree: 0
        }

        //this.rotateDegree= this.rotateDegree.bind(this)

    } //END Constructor


    render() {


        //  transform: rotate(45deg);
        return (<img className='cards' style={{ transform: `rotate(${this.props.degree}deg)` }} alt="salam" src={this.props.src} />)
    }
}
export default Card