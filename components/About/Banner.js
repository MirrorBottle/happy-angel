import React from 'react';
import user, { usersData } from './../../user';
const isServer = typeof window === 'undefined';

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
            <div className="jumbotron jumbotron-fluid ptb-100 home-banner about bg-custom-dark">
                <div className="container pt-50 d-flex flex-column justify-content-center align-items-center">
                    <div className="row">
                        <div className="col-md-12 d-flex justify-content-center align-items-center col-12  wow fadeIn">
                            <img src='/static/logo.png' alt="ShiroKaze Banner" className="img-fluid" />
                        </div>
                        <div className="col-md-12 col-12  wow fadeIn">
                            <div className="container">
                                <h2 className="text-center">"Sebuah aplikasi semi-hidden untuk memesan seorang gadis. Jual diri namun bukan jual diri. Mereka tetap aman dan bersih"</h2>
                                <h2 className="text-center">-Rinju Comic</h2>
                                <p className="mt-4 text-center font-weight-bold">Perlu diingat website ini tidak bekerja secara nyata dan pembuatannya sudah disetujui oleh pihak Rinju Comic.</p>
                                <div className="mt-4 d-flex flex-column justify-content-center align-items-center">
                                    <h2 className="text-center">DIBUAT OLEH</h2>
                                    <div className="row mt-3 about-make  pb-100">
                                        <div className="col-md-6 col-12 text-center mt-3">
                                            <a href="https://shirokaze.netlify.app">
                                                <h1 className="text-white text-decoration-none">SHIROKAZE</h1>
                                            </a>
                                        </div>
                                        <div className="col-md-6 col-12 text-center mt-3">
                                            <a href="https://web.facebook.com/rinjucomic">
                                                <h1 className="text-white text-decoration-none">RINJU COMIC</h1>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
