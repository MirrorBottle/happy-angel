import React from 'react';
import App from 'next/app';
import { DefaultSeo } from 'next-seo';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/@fortawesome/fontawesome-free/css/all.css';
import './../assets/css/animate.css';
import './../assets/css/style.scss';
import './../assets/css/responsive.scss';
export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return (
            <React.Fragment>
                <DefaultSeo
                    title="Shirokaze - Game Maker and Website Developer"
                    description="A team of young game maker from Indonesia"
                    openGraph={{
                        type: 'website',
                        locale: 'id-ID',
                        url: '',
                        site_name: 'Shirokaze',
                    }}
                />
                <Component {...pageProps} />
            </React.Fragment>
        );
    }
}
