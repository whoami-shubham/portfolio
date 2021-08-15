import React, { useState} from "react";
import { useRouter } from 'next/router'
import Navbar from "../src/views/navbar/Navbar";
// import resume from "../assets/shubham_jha_resume.pdf";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import style from "../styles/Resume.module.css"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
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
      <Document file={RESUME_URL} onLoadSuccess={onDocumentLoadSuccess} className={style.resumeContainer} >
        {
              Array.from(
                new Array(numPages),
                (el, index) => (
                  <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                  />
                ),
              )
            }
      </Document>
      </center>
    </div>
  );
}
export default Resume;