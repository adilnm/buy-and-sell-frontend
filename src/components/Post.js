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
            show: false

        };
    }

    handleClick = (e) => {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    handleModalClick = (e) => {
        this.setState({ show: !this.state.show })
    }

    handleDelete = e => {
        const r=window.confirm("Are you sure ?")
        if (r) {
            this.props.DeletePoste(this.props.post)
        }
    }

    render() {
        const { post, loggedIn, currentUser } = this.props
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
                <div>
                    <img className="card-img-top" src={post.image ? post.image.url : ""} alt="Post image"></img>
                    <div className="card-body">
                        <h3 className="card-title"> {post.title}</h3>
                        <h5 > {post.price}</h5>
                        <button className="btn btn-info btn-block" onClick={this.handleClick}>Description</button>
                        <button className="btn btn-danger btn-block" onClick={this.handleDelete}>Delete Post</button>
                    </div>
                </div>
                <div>
                    <h3 class="card-header hah" style={{ background: "burlywood" }}>{post.title}</h3>
                    <div className="card-body" style={{ background: " #fff9e6" }}>
                        <h3> {post.price} </h3>
                        <p className="card-text">{post.description}</p>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">{post.user.email}</li>
                            <li class="list-group-item">{post.user.phone_number}</li>
                        </ul>

                        <div class="card-footer text-muted">
                            <button className="btn btn-info btn-block" onClick={this.handleClick}>Back to post</button>
                            <Button className="btn btn-warning btn-block" onClick={this.handleModalClick}>Edit Post</Button>

                        </div>

                        <Modal show={this.state.show}>
                            <Modal.Header >
                                <Modal.Title>Edit Post</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {<EditPost closeModal={this.handleModalClick} post={post} />}
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

const mstp = (state) => {
    return {
        currentUser: state.currentUser[0].user,
        loggedIn: state.currentUser[0].logged_in
    }
}

export default connect(mstp, { DeletePoste })(Post)

