import React, { Componet } from 'react';

function withAuth(WrappedComponent) {
    return class extends Component {
        render() {
            return <WrappedComponent {...this.props} />;
        }
    }
}
