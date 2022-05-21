import React, {useState,useEffect,useContext } from "react";
import { useRouter } from 'next/router'
import scrollContext from "../contexts/ScrollContext";

function Navbar(props) {
  const router = useRouter() 
 const [curNav,setcurNav] = useContext(scrollContext);
  function scroll(id){
    switch (id) {
      case "0":
            props.scrollToArticles && props.scrollToArticles()
            break;
      case "1":
        props.scrollToProjects && props.scrollToProjects();
        break;
        case "2":
          props.scroll && props.scroll();
          break;
      default:
        props.scroll && props.scroll();
        break;
    }
  }


  useEffect(()=>{
     if(curNav && curNav!=="2"){
       scroll(curNav);
     }
  },[curNav])

  const clickHandler = (id, href) => {
    if(id!=="2" && curNav==="2"){
      router.push("/");
    }
    setcurNav(id);
    if (href) {
      setTimeout(()=>router.push(href),0);
    }
  };

  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="/" onClick={()=>clickHandler("")}>
          /
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ml-auto">
            {/* <li className="nav-item">
                            <a className="nav-link" href="#">About <span className="sr-only">(current)</span></a>
                        </li> */}
            <li
              className={`nav-item ${curNav === "0" ? "active" : ""}`}
              onClick={() =>
                clickHandler("0")
              }
            >
              <span className="nav-link">
                Blog
              </span>
            </li>
            <li
              className={`nav-item ${curNav === "1" ? "active" : ""}`}
              onClick={()=>clickHandler("1")}
            >
              <span className="nav-link">Projects</span>
            </li>
            <li
              className={`nav-item ${curNav === "2" ? "active" : ""}`}
              onClick={() => clickHandler("2", "/resume")}
            >
              <span className="nav-link">
                Resume
              </span>
            </li>
            {/* <li
              className={`nav-item ${curNav === "3" ? "active" : ""}`}
              //onClick={() => clickHandler("2", "resume")}
            >
              <span className="nav-link">
                About
              </span>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;