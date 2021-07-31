import React, { Component } from 'react';
import Card from '../card/card.component';
import './card-list.style.css';

export default class CardList extends Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {
        const { monsters } = this.props;

        return (
            <div className='card-list'>
                {
                    monsters.map(monster => (
                        <Card key={monster.id} monster={monster}/>
                    ))
                }
            </div>
        );
    }
}