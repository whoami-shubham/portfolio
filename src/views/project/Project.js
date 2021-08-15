import React, { Component } from "react";
import style from "../../../styles/Project.module.css";
export default class Project extends Component {
  render() {
    const { url, isdemo, demo, img_url, lib, name, content,react } = this.props.data;
    return (
      <div>
        <div className="row my-3">
          <div className="col-3 left_item">
            <a href={demo}>
              <img src={img_url} className={`img_item ${style.imgItem}`} alt="img" />
            </a>
          </div>
          <div className="col-9 right_item">
            <ul className={`paragraph ${style.projectUl}`}>
              <li>
                <b>{name}</b>
              </li>
              <li>
                {url ? (
                  <a href={url} target="_blank">
                      <button className={`btn ${style.btn} ${style.github}`}><i className="devicon-github-original"></i> code</button>
                  </a>
                ) : null}
                &nbsp;
                {isdemo ? (
                  <a href={demo} target="_blank">
                    
                    {lib ? (
                        <button className={`btn ${style.btn} ${style.npm}`}><i className="devicon-npm-original-wordmark"></i> demo</button>
                      
                    ) : react?<button className={`btn ${style.btn} ${style.react}`}><i className="devicon-react-original"></i> demo</button>:
                     (
                        <button className={`btn ${style.btn} ${style.github}`}><i className="devicon-github-original"></i> demo</button>
                    )}
                  </a>
                ) : null}
              </li>
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
