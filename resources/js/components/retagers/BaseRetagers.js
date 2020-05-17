import React from 'react';
import PropsRetagers from './PropsRetagers';
import Pagination from '../Pagination';

class BaseRetagers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            retagerComponents: [],
            current_page: 1,
            last_page: null,
            per_page: null,
            to: null,
            total: null,
        }
        this.takeData = this.takeData.bind(this);
    }

    componentDidMount() {
        this.takeData(1);
    }

    takeData(page) {
        const self = this;
        let zip_code = '';
        axios.get('/api/retagers?page=' + page + '&zip_code=' + zip_code)
            .then(function (response) {
                console.log(response.data);
                const retagerComponents = response.data.data.map(retager =>
                    <PropsRetagers
                        key={retager.id}
                        likes={5}
                        image={retager.image}
                        nombre={retager.name}
                    />);
                self.setState({
                    retagerComponents: retagerComponents,
                    current_page: response.data.current_page,
                    last_page: response.data.last_page,
                    per_page: response.data.per_page,
                    to: response.data.to,
                    total: response.data.total,
                });
            })
            .catch(function (error) {

            });
    }

    render() {
        return (
            <div>
                <Pagination
                    current_page={this.state.current_page}
                    last_page={this.state.last_page}
                    per_page={this.state.per_page}
                    to={this.state.to}
                    total={this.state.total}
                    refresh={this.takeData}
                />
                <div className="container-fluid d-flex justify-content-center mt-5">
                    <div className="row ">
                        {this.state.retagerComponents}
                    </div>
                </div>
                <br />
                <Pagination
                    current_page={this.state.current_page}
                    last_page={this.state.last_page}
                    per_page={this.state.per_page}
                    to={this.state.to}
                    total={this.state.total}
                    refresh={this.takeData}
                />
                <br />
            </div>
        )
    }
}

export default BaseRetagers;