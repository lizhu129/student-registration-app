import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav class="navbar navbar-dark bg-dark">
                    <div><a href="https://www.google.com" className='navbar-brand'>Student Registration App</a></div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;