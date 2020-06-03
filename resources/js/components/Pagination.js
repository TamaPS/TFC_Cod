import React from 'react';

class Pagination extends React.Component {
    constructor(props) {
        super(props);
    }

    //PARA IR A LA PÁGINA QUE SE PASA POR PAGE
    refresh(page) {
        let paginaInicial = this.props.current_page + page;
        if (paginaInicial < 1)
            paginaInicial = 1;

        //MÉTODO DEL COMPONENTE PADRE QUE SE HA PASADO POR PROPS
        this.props.refresh(paginaInicial);
    }

    //PAGINACIÓN COMPUESTA, LLAMA A REFRESH + o - 1
    render() {
        return (
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center" id="paginacion">
                    <li className={(this.props.current_page > 1) ? 'page-item' : 'page-item disabled'}><button className="page-link" onClick={() => this.refresh(-1)}><i className="fas fa-backward" style={{color: 'rgb(255, 129, 255)'}}></i></button></li>
                    <li><span className="page-link" style={{color: 'rgb(255, 129, 255)'}}>{this.props.current_page + '/' + this.props.last_page}</span></li>
                    <li className={(this.props.current_page < this.props.last_page) ? 'page-item' : 'page-item disabled'}><button className="page-link" onClick={() => this.refresh(1)}><i className="fas fa-forward" style={{color: 'rgb(255, 129, 255)'}}></i></button></li>
                </ul>
            </nav>
        )
    }
}

export default Pagination;