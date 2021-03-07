import React from "react";
import HTMLText from "../HTMLText/HTMLText";
import {Link} from "react-router-dom";

const DynamicArticle = (props) => {
  return (
    <>
      <Link to={'/articlelist'}>Back</Link>
      {props.article ?
        <article>
          <header>
            <h1>{props.article.title}</h1>
            <address>
              by {props.article.author} (
              <a href={props.article.authorEmail}>{props.article.authorEmail}</a>)
              <br/>
            </address>
            <time dateTime={props.article.timeStamp}>{props.article.displayDate}</time>
          </header>
          <HTMLText text={props.article.text}/>
        </article> : <h3>no article</h3>}
    </>

  );
};

export default DynamicArticle;
