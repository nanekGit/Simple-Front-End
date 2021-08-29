import React from 'react';
import "./RandomNumber.css";

export interface RandomNumberProps{
    min?: number; //opctionalne
    max?: number; //opctionalne
}

export interface RandomNumberState{
    randomNumber: number;
}

export class RandomNumber  extends React.Component<RandomNumberProps, RandomNumberState> {
    constructor(props: RandomNumberProps) {
        super(props);
        let {min, max} = props;

        if(!min){
            min=1; //defaultowe 1
        }
        if(!max){
            max=100; //defaultowe 100
        }

        this.state={
            randomNumber: Math.floor(Math.random() * (max - min + 1) + min)
        }
    }
    render() {
        return <p>Number: {this.state.randomNumber} <span className="again button" onClick={() => this.randomize()}> &#8635;</span></p>;
    }

    randomize(){
        let {min, max} = this.props;

        if(!min){
            min=1; //defaultowe 1
        }
        if(!max){
            max=100; //defaultowe 100
        }

        this.setState({
            randomNumber: Math.floor(Math.random() * (max - min + 1) + min)
        })

    }
}