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

    //Generate Random rotate degree


    // componentDidMount(){
    //     var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    //     // Random degree between 0 and 20
    //     const deg = plusOrMinus * Math.floor(Math.random()*20)
    //  this.setState({degree:deg})

    // }


    // rotateDegree()
    // {
    //     //Negative degree or positive degree
    //     var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    //    // Random degree between 0 and 20
    // return plusOrMinus * Math.floor(Math.random()*20)
    // }

    render() {


        //  transform: rotate(45deg);
        return (<img className='cards' style={{ transform: `rotate(${this.props.degree}deg)` }} alt="salam" src={this.props.src} />)
    }
}
export default Card