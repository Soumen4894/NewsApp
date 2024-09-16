import React from 'react'
import icon from './newsIcon.png'
import { Link } from "react-router-dom";


const Navbar = () => {
    
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ padding: '0' }} >
                    <div className="container-fluid" style={{ backgroundColor: '#7A7070' }}>
                        <img src={icon} alt="icon" />
                        {/* <Link className="navbar-brand" to="/">Navbar</Link> */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <strong><Link className="nav-link" aria-current="page" to="/">Home</Link></strong>
                                </li>
                                {/* <li className="nav-item">
                                    <a className="nav-link" to="/">About</a>
                                </li> */}
                                {/* <li className="nav-item"><a className="nav-link" to="/about">About</a> </li> */}
                                <strong><li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li></strong>
                                <strong><li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li></strong>
                                {/* <strong><li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li></strong>
                                <strong><li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li></strong> */}
                                <strong><li className="nav-item"><Link className="nav-link" to="/general">General</Link></li></strong>
                                <strong><li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li></strong>
                                <strong><li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li></strong>
                                <strong><li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li></strong>
                                <strong><li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li></strong>

                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
        )
    
}

export default Navbar
