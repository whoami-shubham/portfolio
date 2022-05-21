import React, { useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../src/views/navbar/Navbar";
// import { Document, Page } from "react-pdf";
// import { pdfjs } from "react-pdf";
import style from "../styles/Resume.module.css";
import { ApiResponse } from "../src/views/types";
import { response } from "../src/data";

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
const RESUME_URL =
  "https://docs.google.com/document/d/1AYRqqdhQqnxc0ys3zaNt1ptMvdf2zyGBAXPlhh0o9V4//preview";

function Resume({ data }: { data: ApiResponse }) {
  const [numPages, setNumPages] = useState(null);
  const router = useRouter();
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Navbar
        scroll={() => {
          router.push("/");
        }}
        curTab="2"
      />
      <button
        className={`btn ${style.downloadBtn}`}
        onClick={() => (window.location.href = RESUME_URL)}
      >
        download
      </button>
      <div className="resume-iframe">
        <iframe
          className={style.resumeContainer}
          src={data?.resumeUrl}
          scrolling="yes"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          height="800px"
          width="100%"
          allowFullScreen
        >
          Google Document will show here..
        </iframe>
      </div>
    </div>
  );
}
export default Resume;

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  // const res = await fetch('https://raw.githubusercontent.com/whoamishubham/whoamishubham.github.io/data/data.json')
  let res = response; //await res.json()
  console.log(
    "%c shubham  ",
    "color:green;background:black;font-size:5vw;border:1px solid red;"
  );
  const data = res?.data;

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      data,
    },
  };
}
