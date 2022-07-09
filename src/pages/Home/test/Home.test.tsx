import { fireEvent, render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import Home from "../Home";


describe("Home page", () => {
  test("Home renders", () => {
    const history = createMemoryHistory();

    render(<Router location={history.location} navigator={history}>
      <Home/>
    </Router>)

    expect(screen.getByRole("heading", {level: 5, name: /SO, YOU WANT TO TRAVEL TO/i})).toBeInTheDocument();
    expect(screen.getByRole("heading", {level: 1, name: /SPACE/i})).toBeInTheDocument();
    expect(screen.getByText("Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!")).toBeInTheDocument();
    expect(screen.getByRole("button", {name: /explore/i})).toBeInTheDocument();
  })

  test("Explore button click", () => {
    const history = createMemoryHistory();

    render(
      <Router location={history.location} navigator={history}>
        <Home/>
      </Router>
    )

    expect(history.location.pathname).toBe("/");
    fireEvent.click(screen.getByRole("button"));
    expect(history.location.pathname).toBe("/destination/");
  })
})