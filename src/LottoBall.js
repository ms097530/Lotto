import React, { Component } from 'react';
import './LottoBall.css';

class LottoBall extends Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return (
            <div className="LottoBall">
                {this.props.num}
            </div>
        );
    }
}

export default LottoBall;
