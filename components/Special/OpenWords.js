import React from 'react'
import Typed from 'react-typed';
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null
export default class OpenWords extends React.Component {
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
            <div className="jumbotron jumbotron-fluid bg-white open-words">
                <div className="container">
                    <div className="col-md-12 col-12 d-flex flex-column wow fadeInDown">
                        <h3 className="font-weight-normal text-center">
                            Halaman ini teruntuk anggota tim kami yang akan meninggalkan pulau antah berantah bernama Kalimantan karena alasan pribadi yang jujur saja, agak tidak masuk akal. Orang pertama yang mengusulkan <b>"Shirokaze"</b> juga adalah orang bernama <b>Fadhil Dhanendra</b> ini, satu-satunya yang bisa ngedit foto dan video dengan baik di antara teman-temannya yang tidak berguna.
                            </h3>
                        <br />
                        <br />
                        <h3 className="font-weight-normal text-center wow fadeInDown">
                            Yang paling senang dengan <i>anime</i> tidak ada tujuan seperti <u><a href="https://something.com" className="text-custom-dark font-weight-bold">Yuru Yuri</a></u>, yang paling polos di antara berempat, dan terkadang ngeselin. Saat kamu di Makassar atau entah dimana, kami berharap kamu akan menunjukkan halaman ini dan berkata <b>"Teman-temanku di kalimantan sudah buatkan ini untukku."</b>
                        </h3>
                    </div>
                </div>
            </div>
        )
    }
}
