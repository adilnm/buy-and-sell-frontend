import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ReactCardFlip from 'react-card-flip';
import '../style/style.css'

export default class HomePost extends Component {

    constructor() {
        super();
        this.state = {
            isFlipped: false
        };
    }

    handleClick = (e) => {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
    render() {
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
                    <div>
                        <img className="card-img-top" src={this.props.post.image ? this.props.post.image.url : ""} alt="Post image"></img>
                        <div className="card-body">
                            <h3 className="card-title"> {this.props.post.title}</h3>
                            <p className="card-text">{this.props.post.description}</p>
                            <button onClick={this.handleClick}>description</button>
                        </div>
                    </div>
                    <div>
                        <img className="card-img-top" src={this.props.post.image ? this.props.post.image.url : ""} alt="Post image"></img>
                        <div className="card-body">
                            <h3 className="card-title"> {this.props.post.title}</h3>
                            <p className="card-text">{this.props.post.description}</p>
                            <button onClick={this.handleClick}>description</button>
                        </div> 
                    </div>
            </ReactCardFlip>

        )
    }
}

