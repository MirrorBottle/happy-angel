import React, { Component } from 'react'
import Navbar from '../components/Layouts/Navbar'
import Form from '../components/Index/Form'
import user from "../user";
import { Router } from "../routes";
export default class index extends Component {
    componentDidMount() {
        if (user("masterId") !== null) {
            Router.pushRoute('/home');
        }
    }
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Form />
            </React.Fragment>
        )
    }
}
