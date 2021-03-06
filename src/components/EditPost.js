import React, { Component } from 'react'
import UpdatePost from '../actions/UpdatePost';
import { connect } from 'react-redux';

class EditPost extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: props.post.id,
            title: props.post.title,
            description: props.post.description,
            price: props.post.price,
            user_id: props.currentUser.user.id,
            category_id: props.post.category_id,
            images: ''
        }
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
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
        formData.append("[post]id", this.state.id)
        formData.append('[post]title', this.state.title)
        formData.append('[post]description', this.state.description)
        formData.append('[post]price', this.state.price)
        formData.append('[post]user_id', this.state.user_id)
        formData.append('[post]category_id', this.state.category_id)
        formData.append("[post]image", this.state.images)
        this.props.UpdatePost(formData)
        this.props.closeModal()
    }

    render() {
        const { post } = this.props
        return (
            <div className="container">
                <div class="d-flex justify-content-center h-100">
                    <div class="card">
                        <div class="card-header">
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <input class="form-control" onChange={this.handleChange} type="text" name="title" value={this.state.title} /><br />
                            <textarea class="form-control" onChange={this.handleChange} placeholder="Description" name="description" id="" cols="30" rows="10" value={this.state.description}></textarea><br />
                            <input class="form-control" onChange={this.handleChange} placeholder="Price" type="text" name="price" value={this.state.price} /><br />
                            <label htmlFor="images">Upload images:</label>
                            <input class="form-control-file" onChange={this.handleImages} type="file" name="images" accept="image/*"></input><br />
                            <select class="form-control" value={this.state.category_id} onChange={this.handleSelect} id="category_id">
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
                            <input class="btn btn-primary btn-lg btn-block" type="submit" value="SUBMIT" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mstp = (state) => {
    return {
        currentUser: state.currentUser[0]
    }
}
export default connect(mstp, { UpdatePost })(EditPost)