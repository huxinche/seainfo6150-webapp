import React from "react";
import ArticleListItem from '../ArticleListItem/ArticleListItem'

const ArticleList = (props) => {
  const {articles} = props
  return <div>
    {articles.length > 0 ? <>
      {articles.map(article => <ArticleListItem key={article.slug} article={article}/>)}
    </> : <h3>You have no data!</h3>}
  </div>
}

export default ArticleList