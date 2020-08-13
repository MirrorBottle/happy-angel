import React from "react";
import user from "./../user";
import { Router } from "./../routes";
export default function withAuth(WrappedComponent) {
    return class extends React.Component {
        componentDidMount() {
            if (user("masterId") === null) {
                Router.pushRoute('/');
            }
        }
        render() {
            return <WrappedComponent />;
        }
    };
}