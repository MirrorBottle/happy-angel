import React from 'react'
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null
export default class Footer extends React.Component {
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
            <footer className="page-footer font-small stylish-color-dark pt-4">
                <div className="container text-center text-md-left d-flex justify-content-center">
                    <div className="row">
                        <div className="col-md-3 mx-auto d-flex align-items-start flex-column page-footer-brand">
                            <h1 className="font-weight-bold">ShiroKaze</h1>
                            <ul className="list-unstyled list-inline text-center">
                                <li className="list-inline-item">
                                    <a className="btn-floating btn-fb mx-1">
                                        <i className="fab fa-facebook-f"> </i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="btn-floating btn-tw mx-1">
                                        <i className="fab fa-twitter"> </i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="btn-floating btn-gplus mx-1">
                                        <i className="fab fa-google-plus-g"> </i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="btn-floating btn-li mx-1">
                                        <i className="fab fa-linkedin-in"> </i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="btn-floating btn-dribbble mx-1">
                                        <i className="fab fa-dribbble"> </i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-5 mx-auto  d-none d-md-block">
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">little Message</h5>
                            <p>Nah, we don't have something to say in the footer.</p>
                        </div>
                        <hr className="clearfix w-100 d-md-none" />
                        <div className="col-md-2 mx-auto d-none d-md-block">
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>
                            <ul className="list-unstyled link">
                                <li>
                                    <a href="#!">About</a>
                                </li>
                                <li>
                                    <a href="#!">Services</a>
                                </li>
                                <li>
                                    <a href="#!">Portfolio</a>
                                </li>
                                <li>
                                    <a href="#!">Team</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                <hr />

                <div className="footer-copyright text-center py-3">© 2020 Copyright:
                    <a href="https://shirokaze.netlify.app/"> ShiroKaze</a>
                </div>
            </footer>
        )
    }
}
