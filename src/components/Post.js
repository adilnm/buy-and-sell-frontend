import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ReactCardFlip from 'react-card-flip';
import '../style/style.css'
import EditPost from './EditPost';
import { Button, Modal } from "react-bootstrap";

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
                            <h5 > {this.props.post.price}</h5>
                            <button className="btn btn-primary" onClick={this.handleClick}>Description</button>
                        </div>
                    </div>
                    <div>
                        <div className="card-body">
                            <h3 className="card-title"> {this.props.post.title}</h3>
                            <h5 > {this.props.post.price}</h5>
                            <p className="card-text">{this.props.post.description}</p>
                            <button className="btn btn-primary" onClick={this.handleClick}>Back to post</button>
                            {/* <button className="btn btn-primary" >Edit</button> */}
                            <Button>Edit Modal</Button>
                            <Modal show={true}>
                                <Modal.Header>Header</Modal.Header>
                                <Modal.Body>
                                    {<EditPost/>}
                                </Modal.Body>
                                <Modal.Footer>Footer</Modal.Footer>
                            </Modal>
                        </div> 
                        {<EditPost/>}
                    </div>
                    
            </ReactCardFlip>

        )
    }
}

