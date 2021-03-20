import React from "react";
import PropTypes from "prop-types";
import styles from './ArticleTextToggleButton.module.css';

const ArticleTextToggleButton = ({buttonText,onClick}) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {buttonText}
    </button>
  );
};

ArticleTextToggleButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}
export default ArticleTextToggleButton;
