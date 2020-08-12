import React, { Component } from 'react'
import Navbar from '../components/Layouts/Navbar'
import Banner from '../components/Index/Banner'
import Services from '../components/Index/Services'
import About from '../components/Index/About'

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
