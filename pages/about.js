import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Banner from '../components/About/Banner';

export default class index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Banner />
            </React.Fragment>
        )
    }
}
