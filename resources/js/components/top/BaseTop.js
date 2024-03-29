import React from 'react';
import PropsRetagers from '../retagers/PropsRetagers';
import Loading from '../Loading';

class BaseTop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            retagerComponents: [],
            response: '',
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

    takeData() {
        const self = this;
        axios.get('/api/tops')
            .then(function (response) {
                self.setState({ response });
                const retagerComponents = response.data.data.map(retager =>
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

    /*SE RENDERIZA LOS RETAGERS CON MÁS LIKES */

    render() {
        if (this.state.response) {
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
        else {
            return (<Loading />);
        }
    }
}

export default BaseTop;