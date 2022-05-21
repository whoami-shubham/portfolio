import React, { Component } from "react";
import { EducationProps } from "../types";

export default function Item(props: EducationProps) {
  return (
    <div>
      <div className="row my-3 mx-2">
        {/* <div className="col-3 left_item">
          <img src={props?.imgUrl} className="img_item" alt="img" />
        </div> */}
        <div className="col-9 right_item">
          <ul className="paragraph un-styled-ul a-styled">
            <div dangerouslySetInnerHTML={{ __html: props?.content }} />
          </ul>
        </div>
      </div>
    </div>
  );
}
