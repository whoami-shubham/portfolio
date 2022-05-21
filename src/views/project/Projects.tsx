import React, { Component } from "react";
import Project from "./Project";
import { ProjectProps } from "../types";

export default function Projects({ data }: { data: ProjectProps[] }) {
  return (
    <div className="row row-wrap">
      {data?.map((project) => {
        return <Project key={project.id} {...project} />;
      })}
    </div>
  );
}
