import React from 'react';
import user, { usersData } from './../../user';
import { FormFeedback, Form, Alert } from "reactstrap";
import { Formik } from "formik";
import { Router } from "../../routes";
import * as Yup from "yup";
const isServer = typeof window === 'undefined';

const WOW = !isServer ? require('wowjs') : null
export default class FormComponent extends React.Component {
    state = {
        displayAlert: false,
    }
    componentDidMount() {
        new WOW.WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 20,
            mobile: true,
            live: false,
        }).init();
    }
    handleSubmit = (values) => {
        const isUserExist = usersData.filter((user) => user.username === values.username && user.password === values.password);
        if (isUserExist.length > 0) {
            sessionStorage.setItem(
                "master",
                btoa(JSON.stringify(isUserExist[0]))
            );
            Router.pushRoute('/home');
        } else {
            this.setState({ displayAlert: true });
        }
    }
    render() {
        const loginSchema = Yup.object().shape({
            username: Yup.string().required("Tolong masukan username anda"),
            password: Yup.string().required("Password harus diisi"),
        });
        return (
            <div className="jumbotron jumbotron-fluid ptb-100 home-banner bg-custom-dark">
                <div className="container pt-50 d-flex flex-column justify-content-center align-items-center">
                    <div className="row">
                        <div className="col-md-6 d-sm-none d-none d-md-block d-lg-block d-xl-block col-12  wow fadeIn">
                            <img src='/static/logo.png' alt="ShiroKaze Banner" className="img-fluid w-100 h-100" />
                            <h1 className=" text-center title">HAPPY <br />ANGEL</h1>
                        </div>
                        <div className="col-md-6 col-12  wow fadeIn">
                            <div className="container">
                                <h2 className="text-center">selamat datang, tuan. <br />Bagaimana Kabarmu?</h2>
                                <Formik
                                    initialValues={{ username: "", password: "" }}
                                    validationSchema={loginSchema}
                                    role="form"
                                    validateOnChange
                                    onSubmit={this.handleSubmit}
                                >
                                    {({
                                        errors,
                                        touched,
                                        handleSubmit,
                                        handleChange,
                                    }) => (
                                            <React.Fragment>
                                                {this.state.displayAlert && <Alert style={{ cursor: "pointer" }} className="text-center" onClick={() => this.setState((prevState) => ({
                                                    displayAlert: !prevState.displayAlert
                                                }))} color="danger"><b>Username atau password tuan salah</b></Alert>}
                                                <Form className="pt-50 mb-4" onSubmit={handleSubmit}>
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">Username</label>
                                                        <input type="text" name="username" onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                        {errors.username && touched.username ? (
                                                            <FormFeedback className="d-block mt-1">
                                                                {errors.username}
                                                            </FormFeedback>
                                                        ) : null}
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputPassword1">Password</label>
                                                        <input type="password" name="password" onChange={handleChange} className="form-control" id="exampleInputPassword1" />
                                                        {errors.password && touched.password ? (
                                                            <FormFeedback className="d-block mt-1">
                                                                {errors.password}
                                                            </FormFeedback>
                                                        ) : null}
                                                    </div>
                                                    <button type="submit" className="btn btn-primary btn-block mt-4">
                                                        Sign In
                                                </button>
                                                </Form>
                                            </React.Fragment>
                                        )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
