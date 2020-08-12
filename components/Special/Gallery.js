import React from 'react'
import Typed from 'react-typed';
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null;

export default class Gallery extends React.Component {
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
            <div id="gallery" class="container pb-100">
                <div className="d-flex align-items-center flex-column justify-content-center">
                    <h1>Gallery</h1>
                    <p>Potret-potret teman-teman di samarinda, dan tentunya ada kamu di salah satunya.</p>
                </div>
                <div class="card-columns mt-4">
                    {Array.from(Array(51).keys()).map((number) => (
                        <div class="card p-3 wow fadeInUp" key={number}>
                            <img src={`/static/images/pict${number + 1}.jpg`} class="img-fluid" height="50%" alt={`pict${number + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
