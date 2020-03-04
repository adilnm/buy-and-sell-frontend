import React, { Component } from 'react'
import { connect } from 'react-redux';

class PostCreate extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
            price: '',
            user_id: props.currentUser.user.id,
            category_id:''
        }
    }

    componentDidMount() {
        // return (!this.props.currentUser.logged_in ? this.props.history.push('/login') : null)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSelect=(e)=>{
        this.setState({
            category_id:parseInt(document.querySelector('#category_id').value)
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3001/posts', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ post: this.state })
        })
            .then(res => res.json())
            .then(post => {
                this.props.history.push(`/`)
            })
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
                    <select onChange={this.handleSelect} id="category_id">
                        <option value='1'>Electronics</option>
                        <option value='2'>Hobbies</option>
                        <option value='3'>Home & Garden</option>
                        <option value='4'>Vehicles</option>
                        <option value='5'>Clothing & Accessories</option>
                        <option value='6'>Rentals</option>
                        <option value='7'>Family</option>
                        <option value='8'>Entertainment</option>
                        <option value='9'>Deals</option>
                    </select><br/>
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
export default connect(mstp)(PostCreate)
