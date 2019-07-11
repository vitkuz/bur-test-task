import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
};

function withAuth(WrappedComponent) {
    return (
        connect(mapStateToProps, null)(class extends Component {
            render() {
                return (
                    <>
                        { this.props.auth ?
                            <WrappedComponent {...this.props}/> :
                            (<div className={`page page-auth-required`}>
                                <p>Auth is required to view this page</p>
                                <p><Link to={`/login`}>Please login</Link></p>
                            </div>)
                        }
                    </>
                )
            }
        })
    )
}

export default withAuth;
