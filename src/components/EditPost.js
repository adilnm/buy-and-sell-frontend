import React, { Component } from 'react'

export default class EditPost extends Component {
    render() {
        return (
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} placeholder="Title" type="text" name="title" /><br />
                    <textarea onChange={this.handleChange} placeholder="Description" name="description" id="" cols="30" rows="10"></textarea><br />
                    <input onChange={this.handleChange} placeholder="Price" type="text" name="price" /><br />
                    {/* <input type="hidden" name="user_id" value={this.props.currentUser.user.id} /> */}
                    <label htmlFor="images">Upload images:</label>
                    <input onChange={this.handleImages} type="file" name="images" accept="image/*" ></input><br />
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
                    </select><br />
                    <input type="submit" value="SUBMIT" />
                </form>
        )
    }
}
