import React from 'react';
import ReactDOM from 'react-dom';

import App from './react/App';

class Index extends React.Component {
    render() {
        return (
            <App />
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('app'));