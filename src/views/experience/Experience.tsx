import React, { useState } from "react";
import Modal from "../modal/Modal";
import style from "../../../styles/Experience.module.css";
import ContentLoader from "react-content-loader";
import { ExperienceProps } from "../types";

export function ExperienceLoader() {
  return (
    <ContentLoader
      speed={2}
      width={300}
      height={160}
      viewBox="0 0 300 160"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="30" rx="2" ry="2" width="400" height="400" />
    </ContentLoader>
  );
}

export default function Experience(props: ExperienceProps) {
  const [open, setOpen] = useState(false);
  const { title, org, duration, imgUrl } = props;
  return (
    <>
      <div
        className={`row ${style.expContainer}`}
        onClick={() => setOpen(true)}
        title="click to see details"
      >
        <div className="col">
          <div className="row">
            <p>{duration}</p>
          </div>
          <div className={`col ${style.paddingLeft0}`}>
            <span className="row paragraph">{title}</span>
            <span className={`row ${style.org}`}>{org}</span>
          </div>
        </div>
        <div>
          <img src={imgUrl} alt={org} className={style.expImg} />
        </div>
      </div>
      <Modal {...props} onClose={() => setOpen(false)} open={open} />
    </>
  );
}
