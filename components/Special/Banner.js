import React from 'react'
import Typed from 'react-typed';
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null
export default class Banner extends React.Component {
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
            <div className="jumbotron jumbotron-fluid bg-white ptb-100 home-banner special-home-banner">
                <div className="container ptb-100">
                    <div className="col-md-12 col-12 d-flex flex-column wow fadeInDown">
                        <h1 className="display-4 text-center">A Special Page For You</h1>
                        <h1 className="font-weight-bold display-4 text-center">
                            <Typed
                                strings={["Fadhil Dhanendra."]}
                                typeSpeed={100}
                                backSpeed={70}
                                backDelay={1}
                                smartBackspace
                            />
                        </h1>
                    </div>
                </div>
            </div>
        )
    }
}
