import React from 'react';
import Header from './header/Header'
import Navbar from './navbar/Navbar'
import BaseTop from './top/BaseTop'
import Copyright from './footers/Copyright';

class Top extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <Navbar />
                <BaseTop />
                <Copyright />
            </div>
        )
    }
}

export default Top;