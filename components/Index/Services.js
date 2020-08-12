import React, { Component } from 'react'
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null
export default class Services extends Component {
    componentDidMount() {
        new WOW.WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 20,
            mobile: true,
            live: false,
        }).init();
    }
    render() {
        return (
            <section id="services" className="py-5">
                <h1 className="service-title text-muted display-2 font-weight-bold">
                    What&nbsp;
                    <span className="d-md-block mt-2 mb-2">We&nbsp;</span>
                    <span className="d-md-block">Do&nbsp;</span>
                </h1>
                <div className="card w-100">
                    <div className="card-body d-flex justify-content-center flex-column align-items-center">
                        <h1 className="display-3 service-icon">
                            <i className="fas fa-gamepad"></i>
                        </h1>
                        <h3 className="mt-2 font-weight-bold service-name">Game Development</h3>
                        <p className="mt-2 text-center service-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem quaerat fuga voluptatum saepe repellat, non sunt totam optio pariatur tempore.</p>
                    </div>
                </div>
                <div className="card w-100">
                    <div className="card-body d-flex justify-content-center flex-column align-items-center">
                        <h1 className="display-3 service-icon">
                            <i className="fas fa-code"></i>
                        </h1>
                        <h3 className="mt-2 font-weight-bold service-name">Web Development</h3>
                        <p className="mt-2 text-center service-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem quaerat fuga voluptatum saepe repellat, non sunt totam optio pariatur tempore.</p>
                    </div>
                </div>
                <div className="card w-100">
                    <div className="card-body d-flex justify-content-center flex-column align-items-center">
                        <h1 className="display-3 service-icon">
                            <i className="fas fa-paint-brush"></i>
                        </h1>
                        <h3 className="mt-2 font-weight-bold service-name">UI/UX Design</h3>
                        <p className="mt-2 text-center service-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem quaerat fuga voluptatum saepe repellat, non sunt totam optio pariatur tempore.</p>
                    </div>
                </div>
            </section>
        )
    }
}
