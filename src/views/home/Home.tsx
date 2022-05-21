import React from "react";
import ContentLoader from "react-content-loader";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Educations from "../education/Educations";
import Articles from "../article/Articles";
import Projects from "../project/Projects";
import Experience, { ExperienceLoader } from "../experience/Experience";
import style from "../../../styles/Home.module.css";
import { ApiResponse } from "../types";
import Cta from "../cta/Cta";

function AvatarWithText(): JSX.Element {
  return (
    <ContentLoader viewBox="0 0 400 160" height={160} width={400}>
      <rect x="110" y="21" rx="4" ry="4" width="254" height="6" />
      <rect x="111" y="41" rx="3" ry="3" width="185" height="7" />
      <rect x="304" y="-46" rx="3" ry="3" width="350" height="6" />
      <rect x="371" y="-45" rx="3" ry="3" width="380" height="6" />
      <rect x="484" y="-45" rx="3" ry="3" width="201" height="6" />
      <circle cx="48" cy="48" r="48" />
    </ContentLoader>
  );
}

function Home(props: ApiResponse) {
  const { educations, projects, articles, exp, cta } = props;
  const projectRef = React.createRef<any>();
  const articleRef = React.createRef<any>();
  const isloading = false;

  const scrollToProjects = () => {
    projectRef.current?.scrollIntoView();
  };
  const scrollToArticles = () => {
    articleRef.current?.scrollIntoView();
  };

  const expLoader = new Array(3).fill(0).map((key) => <ExperienceLoader />);
  const experiences = isloading
    ? expLoader
    : exp && exp.map((expr, i) => <Experience key={i} {...expr} />);

  return (
    <div>
      <Navbar
        scrollToProjects={scrollToProjects}
        scrollToArticles={scrollToArticles}
      />
      <Cta {...cta} />
      <div className="container my-5">
        <span className="name items_margin heading">Work Experience</span>
        <div className={`row ${style.experiences}`}>{experiences}</div>
        <span className="name items_margin heading">Education</span>
        {educations.length && !isloading ? (
          <Educations data={educations} />
        ) : (
          <AvatarWithText />
        )}
        <span className="name items_margin heading" ref={projectRef}>
          Recent Projects
        </span>
        {/* <hr/> */}
        {projects.length !== 0 && !isloading ? (
          <Projects data={projects} />
        ) : (
          <AvatarWithText />
        )}
        <span className="name items_margin heading" ref={articleRef}>
          Recent Articles
        </span>
        {/* <hr/> */}
        {articles.length !== 0 && !isloading ? (
          <Articles data={articles} />
        ) : (
          <AvatarWithText />
        )}
      </div>
      <div className="container items_margin"></div>
      <Footer />
    </div>
  );
}
export default Home;
