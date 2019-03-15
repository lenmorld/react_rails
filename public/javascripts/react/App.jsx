import React from 'react';

import axios from 'axios';


class App extends React.Component {

    constructor() {
        super();
        this.state = {
            items: [],
        };
    }

	componentDidMount() {
        // items_controller.rb
		axios.get(`/items.json`)
			.then((res) => {
                console.log(res);
                // debugger;
				const items = res.data;
				this.setState({
					items: items,
				})
			});
    }
    
    render() {
        return (
            <div>
                {
                    (this.state.items.map(item => {
                        return <p>{item.name} - {item.description}</p>
                    }))
                }
            </div>
        );
    }
}

export default App;