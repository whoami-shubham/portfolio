import React, { Component } from 'react'
export default class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            active:""
        }
    }
    componentDidMount(){
        this.setState({active:this.props.curTab?this.props.curTab:""})
    }
  render() {
    const clickHandler = (id,href)=>{
        this.setState({active:id})
        if(href){
            window.location.href=href;
        }
    }
      const clickProjectsHandler = ()=>{
                  this.props.scroll();
                  clickHandler("1")
      }
      
      const {active} = this.state;
    return (
      <div className="header">
         <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#">Shubham</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ml-auto">
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#">About <span className="sr-only">(current)</span></a>
                        </li> */}
                        <li className={`nav-item ${active==="0"?"active":""}`} onClick={()=>clickHandler("0","http://whoami-shubham.github.io")} >
                            <a className="nav-link" href="http://whoami-shubham.github.io" target='_blank'>Blog</a>
                        </li>
                        <li className={`nav-item ${active==="1"?"active":""}`} onClick={clickProjectsHandler} >
                            <span className="nav-link">Projects</span>
                        </li>
                        <li className={`nav-item ${active==="2"?"active":""}`} onClick={()=>clickHandler("2","#/resume")}>
                            <a className="nav-link" href="#/resume">Resume</a>
                        </li>
                    </ul>
                </div>
         </nav>
      </div>
    )
  }
}
