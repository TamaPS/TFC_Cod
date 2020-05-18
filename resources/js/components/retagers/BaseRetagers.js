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
            alert: false,
            zip_code: '',
        }
        this.takeData = this.takeData.bind(this);
        this.zip_code = '';
    }

    componentDidMount() {
        this.alerta();
        this.takeData(1);
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            this.alerta();
            this.takeData(this.props.current_page);
        }
    }

    alerta() {
        if (this.props.from == 'cerca') {
            if (!this.props.userData.user.id) {
                this.setState({ alert: true });
                this.zip_code = '';
            }else{
                this.setState({ alert: false });
                this.zip_code = this.props.userData.user.zip_code;
            }
            
        }
    }

    takeData(page) {
        const self = this;
        axios.get('/api/retagers?page=' + page + '&zip_code=' + this.zip_code)
            .then(function (response) {
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
                {this.state.alert &&
                    <div className="alert alert-dark alert-dismissible fade show" role="alert">
                        <p>Para ver los retagers cerca de ti, inicia sesión.</p>
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>}
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