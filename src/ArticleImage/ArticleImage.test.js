import React from "react";
import ArticleImage from "./ArticleImage";
import article from '../testData.json'

describe("DynamicArticle tests", () => {
  it("renders correctly", () => {
    const { container } = render(<ArticleImage title={article.title} url={article.image._url} />);
    expect(container).toMatchSnapshot();
  });
});
