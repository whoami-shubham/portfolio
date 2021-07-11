import React, { useState,useContext } from "react";
import { withRouter } from "react-router";
import Navbar from "../navbar/Navbar";
import resume from "../../assets/shubham_jha_resume.pdf";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import "./resume.css"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
const RESUME_URL = "https://drive.google.com/file/d/14PvyvmmcGn8K1NP_t0dHVpwtt1q2O96n/view?usp=sharing"
function Resume(props) {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  
  return (
    <div>
      <Navbar scroll={() => {
        props.history.push("/");
      }} curTab="2" />
      <center>
      <button className="btn download-btn" onClick={()=>window.location.href = RESUME_URL}>download</button>
      <Document file={resume} onLoadSuccess={onDocumentLoadSuccess} className="resume-container" >
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
export default withRouter(Resume);