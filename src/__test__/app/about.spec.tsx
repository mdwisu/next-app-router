import "@testing-library/jest-dom";
import AboutPage from "@/app/about/page";
import AboutLayout from "@/app/about/layout";
import { render } from "@testing-library/react";
import { describe } from "node:test";

describe("About Page", () => {
  it("should render the about page", () => {
    const page = render(
      <AboutLayout>
        <AboutPage />
      </AboutLayout>
    );
    expect(page).toMatchSnapshot();
  });
});
