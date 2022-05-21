import React, { Component } from "react";
import style from "../../../styles/Project.module.css";
import { ProjectProps } from "../types";

export default function Project(props: ProjectProps) {
  const { url, isDemo, demo, imgUrl, lib, name, content, react } = props;
  return (
    <div>
      <div className="row my-3 min-w-265">
        {/* <div className="col-3 left_item">
          <a href={demo}>
            <img
              src={imgUrl}
              className={`img_item ${style.imgItem}`}
              alt="img"
            />
          </a>
        </div> */}
        <div className="col-9 right_item">
          <ul className={`paragraph ${style.projectUl}`}>
            <li>
              <b className={`${style.name}`}>{name}</b>
            </li>
            <li>
              {url ? (
                <a href={url} target="_blank">
                  <button className={`btn ${style.btn} ${style.github}`}>
                    <i className="devicon-github-original"></i> code
                  </button>
                </a>
              ) : null}
              &nbsp;
              {isDemo ? (
                <a href={demo} target="_blank">
                  {lib ? (
                    <button className={`btn ${style.btn} ${style.npm}`}>
                      <i className="devicon-npm-original-wordmark"></i> demo
                    </button>
                  ) : react ? (
                    <button className={`btn ${style.btn} ${style.react}`}>
                      <i className="devicon-react-original"></i> demo
                    </button>
                  ) : (
                    <button className={`btn ${style.btn} ${style.github}`}>
                      <i className="devicon-github-original"></i> demo
                    </button>
                  )}
                </a>
              ) : null}
            </li>
            <div
              className="max-w-300"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
