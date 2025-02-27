import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../Assets/Images/logoimage.jpg"
import Login from '../Features/UserMangenment/Pages/Login'

const Header: React.FC = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
        <div className="container-fluid mt-2">
          <a className="navbar-brand" href="/"></a>
          <img src={logo} alt='' width={150} height={50}></img>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-end px-2" id="navbarSupportedContent">
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/login">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/about'>About</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/contact'>Contact</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/signout'>Sign Out</Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>

    </>
  )
}

export default Header