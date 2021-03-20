import React, {useState} from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import ArticleTextToggleButton from '../ArticleTextToggleButton/ArticleTextToggleButton';
import styles from './ArticleListItem.module.css';

const ArticleListItem = (props) => {
  const [show, setShow] = useState(false)
  return (
    <div className={styles.card}>
      <Link to={`/articlelist/${props.slug}`} className={styles.title}>{props.article.title}</Link>
      {show && <>
        <time dateTime={props.article.timeStamp} className={styles.time}>
          {props.article.displayDate}
        </time>
        <p className={styles.text}>{props.article.shortText}</p>
      </>}
      <ArticleTextToggleButton buttonText={show ? 'Show less' : 'Show more'} onClick={() => setShow(!show)}/>
    </div>
  );
};

ArticleListItem.propTypes = {
  article: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
};
export default ArticleListItem;
