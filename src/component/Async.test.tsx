import React from "react";
import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders posts if request succeeds", async () => {
    //Arrang
    window.fetch = jest.fn();
    (window.fetch as jest.Mock<any, any>).mockResolvedValueOnce({
      json: async () => [{ id: "a", title: "a", userId: 0, body: "a" }],
    });
    render(<Async />);
    //Act
    //...Nothing
    //Assert
    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
