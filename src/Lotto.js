import React, { Component } from 'react';
import './Lotto.css';
import LottoBall from './LottoBall';

class Lotto extends Component
{
    constructor(props)
    {
        super(props);
        this.state = { nums: Array.from({ length: this.props.numBalls }) }
        this.getNums = this.getNums.bind(this);
    }

    static defaultProps =
        {
            title: 'Lotto',
            numBalls: 6,
            maxNum: 40
        }

    getNums()
    {
        let newNums = Array(this.props.numBalls);
        // Object.keys(container).length gives number of elements in array
        for (let i = Object.keys(newNums).length; Object.keys(newNums).length < this.props.numBalls;)
        {
            let num = Math.floor(Math.random() * this.props.maxNum + 1);
            if (!newNums.find(el => el === num))
            {
                newNums.push(num);
            }
        }
        this.setState({ nums: newNums });
    }
    render()
    {
        // this.getNums();
        return (
            <div className="Lotto">
                <h3 className="Lotto-title">{this.props.title}</h3>
                <div className="Lotto-balls">
                    {this.state.nums.map(val => <LottoBall num={val} />)}
                </div>
                <button className="Lotto-btn" onClick={this.getNums}>Generate</button>
            </div>
        );
    }
}

export default Lotto;
