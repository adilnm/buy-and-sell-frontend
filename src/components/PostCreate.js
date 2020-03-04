import React, { Component } from 'react'
import { connect } from 'react-redux';
import Posts from '../reducers/Posts';
import newPost from '../actions/NewPost';

class PostCreate extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
            price: '',
            user_id: '',
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
        this.props.newPost(this.state)
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
                    <input type="hidden" name="user_id" value={this.props.currentUser.id}/>
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
export default connect(mstp,{newPost})(PostCreate)