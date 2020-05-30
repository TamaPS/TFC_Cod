import React from 'react';
import PropsProductos from '../productos/PropsProductos';
import Pagination from '../Pagination';

class BaseSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productComponents: [],
            current_page: 1,
            last_page: null,
            per_page: null,
            to: null,
            total: null,
            search: '',
            filters: null,
        }
        this.takeData = this.takeData.bind(this);
        this.handleChangeSearch = this.handleChangeSearch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.takeData(1);
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            this.takeData(this.props.current_page);
        }
    }

    handleChangeSearch(event) {
        this.setState({ 
            search: event.target.value,
            filters: {
                name: event.target.value,
                description: event.target.value,
            }
         });
    }

    handleSubmit(event) {
        this.takeData(1);
        event.preventDefault();
    }

    takeData(page) {
        var values = {
            page: page,
            filters: this.state.filters,
        }
        const self = this;
        axios.post('/api/products', values)
            .then(function (response) {
                const productComponents = response.data.data.map(product =>
                    <PropsProductos
                        key={product.id}
                        id={product.id}
                        image={product.images[0].name}
                        nombre={product.name}
                        precio={product.price}
                    />);
                self.setState({
                    productComponents: productComponents,
                    current_page: response.data.meta.current_page,
                    last_page: response.data.meta.last_page,
                    per_page: response.data.meta.per_page,
                    to: response.data.meta.to,
                    total: response.data.meta.total,
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <br />
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-group">
                            <div className="custom-file">
                                <input type="text" className="form-control" value={this.state.search} onChange={this.handleChangeSearch} />
                            </div>
                            <div className="input-group-append">
                                <input type="submit" className="btn btn-outline" value="Buscar"/>
                            </div>
                        </div>
                    </form>
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
                <div className="container-fluid d-flex justify-content-center mt-5">
                    <div className="row ">
                        {this.state.productComponents}
                    </div>
                </div>
                <Pagination
                    current_page={this.state.current_page}
                    last_page={this.state.last_page}
                    per_page={this.state.per_page}
                    to={this.state.to}
                    total={this.state.total}
                    refresh={this.takeData}
                />
            </div>
        )
    }
}

export default BaseSearch;