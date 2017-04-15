import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{
    render(){
        return(
            <div className="jumbotron">
                <h1>Cos cos</h1>
                <p>asf asf asf</p>
                <Link to="about" className="btn btn-primary btn-lg">More</Link>
            </div>
        )
    }
}

export default HomePage;