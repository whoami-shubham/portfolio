import React, { useState} from "react";
import { useRouter } from 'next/router'
import Navbar from "../src/views/navbar/Navbar";
// import { Document, Page } from "react-pdf";
// import { pdfjs } from "react-pdf";
import style from "../styles/Resume.module.css"

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
const RESUME_URL = "https://drive.google.com/file/d/14PvyvmmcGn8K1NP_t0dHVpwtt1q2O96n/view?usp=sharing"

function Resume(props) {
  const [numPages, setNumPages] = useState(null);
  const router = useRouter()
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  
  return (
    <div>
      <Navbar scroll={() => {
        router.push("/");
      }} curTab="2" />
      <center>
      <button className={`btn ${style.downloadBtn}`} onClick={()=>window.location.href = RESUME_URL}>download</button>
      <iframe className={style.resumeContainer} src="https://docs.google.com/document/d/1AYRqqdhQqnxc0ys3zaNt1ptMvdf2zyGBAXPlhh0o9V4//preview"  scrolling="yes" frameBorder="0" marginHeight="0px" marginWidth="0px" height="800px" width="100%" allowFullScreen>
        Google Document will show here..
      </iframe>
      </center>
    </div>
  );
}
export default Resume;