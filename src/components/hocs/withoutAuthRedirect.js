import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
};

function withoutAuthRedirect(WrappedComponent, redirectUrl = '/user') {
    return (
        connect(mapStateToProps, null)(class extends Component {
            render() {
                return (
                    <>
                        { this.props.auth ? <Redirect to={redirectUrl} /> : <WrappedComponent {...this.props}/> }
                    </>
                )
            }
        })
    )
}

export default withoutAuthRedirect;
