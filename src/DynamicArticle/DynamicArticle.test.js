import React from "react";
import DynamicArticle from "./DynamicArticle";
import article from '../testData.json'

describe("DynamicArticle tests", () => {
  it("renders correctly", () => {
    const { container } = render(<DynamicArticle article={article} />);
    expect(container).toMatchSnapshot();
  });
});
