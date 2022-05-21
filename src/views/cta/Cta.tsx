import React from "react";
import Image from "next/image";
import style from "../../../styles/Home.module.css";
import { CtaProps } from "../types";

export default function Cta(props: CtaProps) {
  const { bio, imgUrl, name = "Shubham Jha", links, message } = props;
  return (
    <div className="row">
      <div className="col-12 cover"></div>
      <div className="col-12">
        <div className="center">
          <img
            className="rounded-circle profile"
            src={imgUrl}
            alt="loading.."
          />
          <figcaption className="center">
            <span className="name">{name}</span>
            <span className="position">{bio}</span>
            <span>
              <ProfileLink href={links?.linkedin} className="fa fa-linkedin" />
              <ProfileLink href={links?.github} className="fa fa-github" />
              <ProfileLink
                href={links?.stackoverflow}
                className="fa fa-stack-overflow"
              />
              <ProfileLink href={links?.quora} className="fa fa-quora" />
              <ProfileLink href={links?.twitter} className="fa fa-twitter" />
              {links?.facebook && (
                <a
                  href={links?.facebook}
                  target="_blank"
                  className="fa fa-facebook"
                ></a>
              )}
              <a href={links?.gmail} target="_blank" className="fa fa-gmail">
                <Image
                  loader={() => "/assets/gmail.ico"}
                  src={"/assets/gmail.ico"}
                  className="gmail"
                  alt="gmail"
                  height={20}
                  width={20}
                />
              </a>
            </span>
            <br />
            <button
              className={style.message}
              onClick={() => (window.location.href = message)}
            >
              <i className="fa fa-whatsapp"></i> Message
            </button>
          </figcaption>
        </div>
      </div>
    </div>
  );
}

function ProfileLink({ href, className }) {
  if (!href) {
    return null;
  }
  return (
    <>
      <a href={href} target="_blank" className={className}></a>
      &nbsp;&nbsp;
    </>
  );
}
