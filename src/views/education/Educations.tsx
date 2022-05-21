import React, { Component } from "react";
import { EducationProps } from "../types";
import Item from "./Item";

export default function Educations({ data }: { data: EducationProps[] }) {
  return (
    <div>
      {data?.map((item) => {
        return <Item key={item.id} {...item} />;
      })}
    </div>
  );
}
