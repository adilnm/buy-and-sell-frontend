import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ReactCardFlip from 'react-card-flip';
import '../style/style.css'
import EditPost from './EditPost';
import { Button, Modal } from "react-bootstrap";
import DeletePoste from '../actions/DeletePoste';
import { connect } from 'react-redux';

class Post extends Component {

    constructor() {
        super();
        this.state = {
            isFlipped: false,
            show:false

        };
    }

    handleClick = (e) => {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    handleModalClick=(e)=>{
        this.setState({show:!this.state.show})
    }

    handleDelete=e=>{
        this.props.DeletePoste(this.props.post)
    }

    render() {
        const {post}=this.props
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
                    <div>
                        <img className="card-img-top" src={post.image ? post.image.url : ""} alt="Post image"></img>
                        <div className="card-body">
                            <h3 className="card-title"> {post.title}</h3>
                            <h5 > {post.price}</h5>
                            <button className="btn btn-primary" onClick={this.handleClick}>Description</button>
                            <button className="btn btn-danger" onClick={this.handleDelete}>Delete Post</button>
                        </div>
                    </div>
                    <div>
                        <div className="card-body">
                            <h3 className="card-title"> {post.title}</h3>
                            <h5 > {post.price}</h5>
                            <p className="card-text">{post.description}</p>
                            <button className="btn btn-primary" onClick={this.handleClick}>Back to post</button>
                            {/* <button className="btn btn-primary" >Edit</button> */}
                            <Button onClick={this.handleModalClick}>Edit Modal</Button>
                            <Modal show={this.state.show}>
                                <Modal.Header >
                                    <Modal.Title>Edit Post</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    {<EditPost closeModal={this.handleModalClick} post={post}/>}
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button onClick={this.handleModalClick}>Close</Button>
                                </Modal.Footer>
                            </Modal>
                        </div> 
                    </div>
                    
            </ReactCardFlip>

        )
    }
}

export default connect(null, {DeletePoste})(Post)

