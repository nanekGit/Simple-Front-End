import React from 'react';
import {NumberSelector} from "./NumberSelector";
import {RandomNumber} from "./RandomNumber";
import {RouteComponentProps} from 'react-router';
import {withRouter} from 'react-router-dom';

interface RandomNumberPageState{
    min: number;
    max: number;
}

class RandomNumberPage extends React.Component<RouteComponentProps, RandomNumberPageState>{
    constructor(props: RouteComponentProps) {
        super(props);

        const params = new URLSearchParams(props.location.search);

        this.state={
            min: parseInt(params.get("min") as string),
            max: parseInt(params.get("max") as string)
        };
    }

    render(){
        return <span>
            <button onClick={() => this.setTo30()}>Set to 30</button>

              <p>{this.state.min} to {this.state.max}</p>

              <p>
                <NumberSelector number={this.state.min} subClick={() => this.subClickMin()} addClick={() => this.addClickMin()}/>
                  &nbsp;to&nbsp;
                  <NumberSelector number={this.state.max} subClick={() => this.subClickMax()} addClick={() => this.addClickMax()}/>
              </p>

              <RandomNumber min={this.state.min} max={this.state.max}/>
        </span>
    }

    setTo30() {
        console.log(this);
        this.setState({
            max: 30
        })
    }
    subClickMin(){
        this.setState({
            min: this.state.min-1
        });
    }
    subClickMax(){
        if(this.state.min>=this.state.max){
            return;
        }
        this.setState({
            max: this.state.max-1
        });
    }
    addClickMin(){
        if(this.state.min>=this.state.max){
            return;
        }
        this.setState({
            min: this.state.min+1
        });
    }
    addClickMax(){
        this.setState({
            max: this.state.max+1
        });
    }

}

export default withRouter(RandomNumberPage);