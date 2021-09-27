import { getByTitle } from '@testing-library/dom'
import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
       let  {title,description}=this.props;
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src="https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/16EE0/production/_120702939_whatsubject.jpg" className="card-img-top" alt="..."/>
                    <div class ="card-body">
                    <h5 class ="card-title">{title}</h5>
                    <p class ="card-text">{description}</p>
                    <a href="/newsdetail" class ="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem

