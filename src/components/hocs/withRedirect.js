import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
};

function withRedirect(WrappedComponent) {
    return (
        connect(mapStateToProps, null)(class extends Component {
            render() {
                return (
                    <>
                        { this.props.auth ? <WrappedComponent {...this.props}/> : <Redirect to='/login' /> }
                    </>
                )
            }
        })
    )
}

export default withRedirect;
