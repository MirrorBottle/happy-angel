import React, { Component } from 'react'
import Navbar from '../components/Layouts/Navbar'
import Banner from '../components/Index/Form'
import Services from '../components/Index/Services'
import About from '../components/Index/About'
import withAuth from "../components/withAuth"

class home extends Component {
    getMessage = () => {
        const hour = new Date().getHours();
        console.log(hour > 6);
        if (hour < 14) {
            return "Waktu yang tidak cocok untuk memesan Angel, karena para Angel sedang bersekolah."
        } else if (hour < 20) {
            return "Waktu yang tepat untuk memesan Angel, karena para Angel sudah pulang sekolah."
        } else {
            return "Kebanyakan Angel sedang beristirahat untuk sekarang"
        }
    }
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <React.Fragment>
                    <div className="row ptb-100 text-white" id="home">
                        <div className="col-md-4 menu col-12 d-flex flex-column justify-content-center align-items-center">
                            <h1 className="display-4 text-center">Random Angel</h1>
                            <h3 className="text-center">(Duration Bonus 20%)</h3>
                        </div>
                        <div className="col-md-4 menu middle-menu col-12 d-flex flex-column justify-content-center align-items-center">
                            <h1 className="display-4 text-center">Select Angel</h1>
                            <h3 className="text-center">Manually</h3>
                        </div>
                        <div className="col-md-4 menu col-12 d-flex flex-column justify-content-center align-items-center">
                            <h1 className="display-4 text-center">Favorite Angel</h1>
                            <h3 className="text-center">(2 Available)</h3>
                        </div>
                        <div className="col-md-4 menu middle-menu mt-4 col-12 offset-md-4 d-flex flex-column justify-content-center align-items-center">
                            <h1 className="display-4 text-center">Rule & How</h1>
                            <h3 className="text-center">How This Site Works</h3>
                        </div>
                        <div className="col-12 text-center container">
                            <h5 className="mt-4 pt-4">Hari ini pukul {new Date().getHours()}. {this.getMessage()}</h5>
                        </div>
                    </div>
                </React.Fragment>
            </React.Fragment>
        )
    }
}

export default withAuth(home);
