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
            <div className="jumbotron jumbotron-fluid ptb-100 home-banner bg-custom-dark">
                <div className="container pt-50">
                    <div className="row">
                        <div className="col-md-6 col-12 d-flex flex-column wow fadeIn">
                            <img src='/static/logo.png' alt="ShiroKaze Banner" className="img-fluid w-100 h-100" />
                            <h1 className=" text-center title">HAPPY <br />ANGEL</h1>
                        </div>
                        <div className="col-md-6 col-12 d-sm-none d-none d-md-block d-lg-block d-xl-block wow fadeIn">
                            <div className="container">
                                <h2 className="text-center">selamat datang, tuan. <br />Bagaimana Kabarmu?</h2>
                                <form className="pt-50 mb-4">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Username</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <button type="submit" class="btn btn-primary btn-block mt-4">
                                        Sign In
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
