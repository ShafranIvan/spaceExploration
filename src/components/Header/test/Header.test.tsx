import { fireEvent, render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import Header from "../Header";
import links from "../../../links";

describe("Header component", () => {
  test("links are rendered", async () => {
    const history = createMemoryHistory();

    render(
      <Router location={history.location} navigator={history}>
        <Header />
      </Router>
    );

    for (let i = 0; i < links.length; i++) {
      const formattedNumber = i.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      const match = await screen.findByRole("link", {
        name: `${formattedNumber} ${links[i].name}`,
      });
      expect(match).toBeInTheDocument();
    }
  });

  test("links are working", async () => {
    const history = createMemoryHistory();

    render(
      <Router location={history.location} navigator={history}>
        <Header />
      </Router>
    );

    for (let i = 0; i < links.length; i++) {
      const formattedNumber = i.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      const match = await screen.findByRole("link", {
        name: `${formattedNumber} ${links[i].name}`,
      });

      fireEvent.click(match);
      expect(history.location.pathname).toBe(links[i].to);
    }
  });
});
