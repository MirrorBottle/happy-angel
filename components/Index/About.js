import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <section id="about">
                <div className="d-flex justify-content-center align-items-center flex-column py-5">
                    <h1 className="display-3 font-weight-bold text-custom-dark">
                        About Us
                        </h1>
                    <div className="container d-flex align-items-center flex-column">
                        <p className="text-center text-custom-dark mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora est ea dolore facere a temporibus iste sunt maxime numquam perspiciatis quidem architecto, nemo ullam laboriosam veniam tenetur cupiditate veritatis nihil.</p>
                        <img src='/static/about2.svg' alt="ShiroKaze Banner" className="img-fluid w-50 h-50 d-sm-none d-none d-md-block d-lg-block d-xl-block" />
                    </div>
                </div>

            </section>
        )
    }
}
