import React from "react";
import ArticleListItem from "./ArticleListItem";
import article from '../testData.json'
import { fireEvent } from "@testing-library/react";

describe("ArticleListItem tests", () => {
  it("renders correctly", () => {
    const { container } = render(<ArticleListItem article={article} key={article.slug} slug={article.slug} />);
    expect(container).toMatchSnapshot();
  });
  it("renders correctly after button is clicked", () => {
    const { container, getByText } = render(
      <ArticleListItem article={article} key={article.slug} slug={article.slug} />
    );
    const button = getByText("Show more");
    fireEvent.click(button);
    expect(container).toMatchSnapshot();
  });
});
