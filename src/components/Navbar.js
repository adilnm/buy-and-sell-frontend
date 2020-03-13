import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Navbar({ currentUser }) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <Link className="navbar-brand" to="/">BUY & SELL</Link>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/createPost">Create a Post</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>

                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            {!currentUser[0].logged_in ? <Link className="nav-link" to="/login">Login</Link> : null}
                        </li>
                        <li className="nav-item">
                            {!currentUser[0].logged_in ? <Link className="nav-link" to="/signup">Signup</Link> : null}
                        </li>
                        <li className="nav-item">
                            {currentUser[0].logged_in ? <Link className="nav-link" to="/logout">Logout</Link> : null}
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

const mstp = state => {
    return {
        currentUser: state.currentUser
    }
}
export default connect(mstp)(Navbar)