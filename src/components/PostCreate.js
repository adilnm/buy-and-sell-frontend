import React, { Component } from 'react'

export default class PostCreate extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
            price: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        console.log('2.target')
    }
    render() {
        return (
            <div>
                <h1>Create A New Post</h1>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} placeholder="Title" type="text" name="title" /><br />
                    <textarea onChange={this.handleChange} placeholder="Description" name="description" id="" cols="30" rows="10"></textarea><br />
                    <input onChange={this.handleChange} placeholder="Price" type="text" name="Price" /><br />
                    <input type="submit" value="SUBMIT" />

                </form>
            </div>
        )
    }
}
