import React, { Component } from 'react';
import './search-box.style.css';

export default class SearchBox extends Component {
    constructor (props) {
        super(props);

        this.props = props;
    }

    render () {
        return (
            <div>
                <input 
                    type='search' 
                    onChange={this.props.handleOnChange}
                    placeholder={this.props.placeholder}
                    className='search'
                />
            </div>
        )
    }
}

