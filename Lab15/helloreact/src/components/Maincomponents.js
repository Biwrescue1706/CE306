import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import Home from './Home';
import ContactForm from './ContactForm';

function MainComponent() {
    return (
        <div className='container-fluid'>
            <h1>React Forms</h1>
            <Router>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Home</Link>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login Form</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact Form</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<LoginForm />} />
                    <Route path='/contact' element={<ContactForm />} />
                </Routes>
            </Router>

        </div>
    )
}

export default MainComponent