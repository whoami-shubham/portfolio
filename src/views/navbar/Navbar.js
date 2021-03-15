import React, { Component } from 'react'
export default class Navbar extends Component {
  render() {
    return (
      <div className="header">
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Shubham</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">About <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="http://whoami-shubham.github.io" target='_blank'>Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com/whoami-shubham" target='_blank'>Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://drive.google.com/file/d/14PvyvmmcGn8K1NP_t0dHVpwtt1q2O96n/view?usp=sharing" target='_blank'>Resume</a>
                        </li>
                    </ul>
                </div>
         </nav>
      </div>
    )
  }
}
