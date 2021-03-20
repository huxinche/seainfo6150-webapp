import React from "react";
import PropTypes from "prop-types";
import ArticleListItem from "../ArticleListItem/ArticleListItem.jsx";
import styles from './ArticleList.module.css';

const ArticleList = (props) => {
  return (
    <div className={styles.list}>
      {props.articles.map((article) => (
        <ArticleListItem article={article} key={article.slug} slug={article.slug}/>
      ))}
    </div>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
}
export default ArticleList;
