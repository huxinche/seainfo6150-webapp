import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import DynamicArticle from "./DynamicArticle/DynamicArticle.jsx";
import ArticleList from "./ArticleList/ArticleList"
import { isEmpty } from "lodash";

function App(props) {
  const [fetchedData, setFetchedData] = useState({});
  const fetchedDataArray = Object.values(fetchedData)
  useEffect(() => {
    const fetchData = async () => {
      // performs a GET request
      const response = await fetch("http://demo1390455.mockable.io/articles");
      const responseJson = await response.json();
      setFetchedData(responseJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);

  return isEmpty(fetchedData) ? null : (
    <div className="App">
      <Switch>

        <Route exact path={`/articlelist`}>
          <ArticleList articles={fetchedDataArray}/>
        </Route>

        <Route exact path={`/articlelist/:slug`} render={history=> {
          return <DynamicArticle article={fetchedData[history.location.pathname.replace('/articlelist/', '')]}/>
        }}>
        </Route>
        <Redirect from={'/*'} to={'/articlelist'}/>
      </Switch>
    </div>
  );
}

export default withRouter(App);

