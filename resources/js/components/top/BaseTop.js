import React from 'react';
import PropsRetagers from '../retagers/PropsRetagers';

class BaseTop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            retagerComponents: [],
        }
        this.takeData = this.takeData.bind(this);
    }

    componentDidMount() {
        this.takeData();
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            this.takeData(this.props.current_page);
        }
    }

    takeData(page) {
        const self = this;
        axios.get('/api/tops')
            .then(function (response) {
                const retagerComponents = response.data.map(retager =>
                    <PropsRetagers
                        key={retager.id}
                        id={retager.id}
                        likes={retager.count_favorites}
                        image={retager.image}
                        nombre={retager.name}
                        takeData={self.takeData}
                        heart={retager.liked}
                        current_page={1}
                    />);
                self.setState({
                    retagerComponents: retagerComponents,
                });
            })
            .catch(function (error) {

            });
    }

    render() {
        return (
            <div>
                <div className="container-fluid d-flex justify-content-center mt-5">
                    <div className="row ">
                        {this.state.retagerComponents}
                    </div>
                </div>
            </div>
        )
    }
}

export default BaseTop;