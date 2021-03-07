import React from "react";

const ArticleListItem = (props) => {
  const {article = {}} = props
  return <div>
    <h1>{article.title}</h1>
    <time dateTime={props.article.timeStamp}>{props.article.displayDate}</time>
    <p>{article.shortText}</p>
  </div>
}

export default ArticleListItem

