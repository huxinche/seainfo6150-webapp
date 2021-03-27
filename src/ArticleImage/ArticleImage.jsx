import React from "react";
import PropTypes from "prop-types";
import styles from './ArticleImage.module.css';

const ArticleImage = (props) => {
  const {url,title} = props;
  return (
    <img className={styles.image} src={url} alt={title}/>
  );
};

ArticleImage.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}
export default ArticleImage;
