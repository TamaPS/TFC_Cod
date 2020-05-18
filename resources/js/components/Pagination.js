import React from 'react';

class Pagination extends React.Component {
    constructor(props) {
        super(props);
    }

    refresh(page) {
        let paginaInicial = this.props.current_page + page;
        if (paginaInicial < 1)
            paginaInicial = 1;

        this.props.refresh(paginaInicial);
    }


    render() {
        return (
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center" id="paginacion">
                    <li className={(this.props.current_page > 1) ? 'page-item' : 'page-item disabled'}><button className="page-link" onClick={() => this.refresh(-1)}><i className="fas fa-backward"></i></button></li>
                    <li><span className="page-link">{this.props.current_page + '/' + this.props.last_page}</span></li>
                    <li className={(this.props.current_page < this.props.last_page) ? 'page-item' : 'page-item disabled'}><button className="page-link" onClick={() => this.refresh(1)}><i className="fas fa-forward"></i></button></li>
                </ul>
            </nav>
        )
    }
}

export default Pagination;