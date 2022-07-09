import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import Destination from "../Destination";
import destinations from "../data/destanations"

describe("Destination page", () => {
  test(`/destination/moon renders`, () => {
      
      const {contents: {name, travelTime, distance, description}} = destinations["moon"]

      const history = createMemoryHistory();

      const route = `/destination/moon`
      history.push(route)

      render(<Router location={route} navigator={history}>
        <Destination/>
      </Router>)

      expect(screen.getByRole("img")).toBeInTheDocument();
      expect(screen.getByRole("heading", {level: 2, name: name})).toBeInTheDocument();
      expect(screen.getByText(description)).toBeInTheDocument();
      
      expect(screen.getByRole("heading", {level: 5, name: /avg. DISTANCE/i})).toBeInTheDocument();
      expect(screen.getByRole("heading", {level: 3, name: distance})).toBeInTheDocument();
      
      expect(screen.getByRole("heading", {level: 5, name: /EST. TRAVEL TIME/i})).toBeInTheDocument();
      expect(screen.getByRole("heading", {level: 3, name: travelTime})).toBeInTheDocument();
    })
})