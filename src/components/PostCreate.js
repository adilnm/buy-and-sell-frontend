import React, { Component } from 'react'
import { connect } from 'react-redux';
import Posts from '../reducers/Posts';
import newPost from '../actions/NewPost';
import Dropzone from 'react-dropzone';

class PostCreate extends Component {

    constructor(props) {
        super(props)

        this.state = {
            title: '',
            description: '',
            price: '',
            user_id: '',
            category_id: '',
            images: ''
        }
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            user_id: this.props.currentUser.user.id
        })
    }

    handleSelect = (e) => {
        this.setState({
            category_id: parseInt(document.querySelector('#category_id').value)
        })
    }

    handleImages = event => {
        const formData = new FormData();
        formData.append('images', event.target.files[0])
        this.setState({
            images: event.target.files[0]
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('[post]title', this.state.title)
        formData.append('[post]description', this.state.description)
        formData.append('[post]price', this.state.price)
        formData.append('[post]user_id', this.state.user_id)
        formData.append('[post]category_id', this.state.category_id)
        formData.append("[post]image", this.state.images)
        this.props.newPost(formData)
    }

    render() {
        return (
            <div>
                {!this.props.currentUser.logged_in ? this.props.history.push('/login') : null}
                <h1>Create A New Post</h1>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} placeholder="Title" type="text" name="title" /><br />
                    <textarea onChange={this.handleChange} placeholder="Description" name="description" id="" cols="30" rows="10"></textarea><br />
                    <input onChange={this.handleChange} placeholder="Price" type="text" name="price" /><br />
                    <label htmlFor="images">Upload images:</label>
                    <input onChange={this.handleImages} type="file" name="images" accept="image/*" ></input><br />
                    <select onChange={this.handleSelect} id="category_id">
                        <option value="" selected disabled hidden>Choose here</option>
                        <option value='1'>Electronics</option>
                        <option value='2'>Hobbies</option>
                        <option value='3'>Home & Garden</option>
                        <option value='4'>Vehicles</option>
                        <option value='5'>Clothing & Accessories</option>
                        <option value='6'>Rentals</option>
                        <option value='7'>Family</option>
                        <option value='8'>Entertainment</option>
                        <option value='9'>Deals</option>
                    </select><br />
                    <input type="submit" value="SUBMIT" />
                </form>
            </div>
        )
    }
}

const mstp = (state) => {
    return {
        currentUser: state.currentUser[0]
    }
}
export default connect(mstp, { newPost })(PostCreate)
