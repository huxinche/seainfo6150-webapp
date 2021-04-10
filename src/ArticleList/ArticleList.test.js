import React from "react";
import ArticleList from "./ArticleList";
import article from '../testData.json'

describe("ArticleList tests", () => {
  it("renders correctly", () => {
    const { container } = render(<ArticleList articles={[article]} />);
    expect(container).toMatchSnapshot();
  });
});
