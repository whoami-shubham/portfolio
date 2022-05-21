import React, { Component } from "react";
import { ArticleProps } from "../types";
import Article from "./Article";

export default function Articles({ data }: { data: ArticleProps[] }) {
  return (
    <div>
      {data?.map((article) => {
        return <Article key={article.id} {...article} />;
      })}
    </div>
  );
}
