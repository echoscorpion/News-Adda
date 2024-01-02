import React from 'react'

export default function Navbar(props) {
  return (
    <>
      <nav className="navbar bg-dark navbar-expand-lg" data-bs-theme="dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">News Adda</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            <div className="form-check form-switch">
            <input className="form-check-input" onClick={props.screenDisplayMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label aa text-light" htmlFor="flexSwitchCheckDefault" >Enable Light Mode</label>
          </div>
            </div>
        </div>
      </nav>
    </>
  )
}

