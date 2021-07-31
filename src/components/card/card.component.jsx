import React, { Component } from 'react';
import './card.style.css';

export default class Card extends Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    render () {
        const { monster } = this.props;

        return (
            <div className='card-container'>
                <img src={`https://robohash.org/${monster.id}set=set2&size=180x180`} alt={monster.name}/>
                <h1>{monster.name}</h1>
                <p>{monster.email}</p>
            </div>
        )
    }
}