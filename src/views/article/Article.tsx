import React, { Component } from "react";
import { ArticleProps } from "../types";
import style from "../../../styles/Article.module.css";

export default function Article(props: ArticleProps) {
  return (
    <div>
      <div className="row my-3 mx-2">
        {/* <div className="col-3 left_item">
          <a href={props?.url}>
            <img src={props?.imgUrl} className="img_item" alt="img" />
          </a>
        </div> */}
        <div className="col-9">
          <ul className={`paragraph right_item un-styled-ul`}>
            <li>
              <b>{props?.title}</b>
            </li>
            <div dangerouslySetInnerHTML={{ __html: props?.content }} />
            <li>
              <a href={props?.url} target="_blank">
                <button className="btn github-button">
                  <i className="devicon-github-original"></i>
                  <span className="text-bottom pl-1">webpage</span>
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
