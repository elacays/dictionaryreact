import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div>
                Selamlar! ,<br />
                Dictionary projemi incelemek için<Link to="/words" className="nav-link active">Buraya tıklayabilir</Link>veya menüden Words'e tıklayarak ulaşabilirsiniz.
            </div>
        );
    }
}

export default Home;