import {
  render,
  cleanup,
  fireEvent,
  screen,
  prettyDOM,
  findByText,
} from "@testing-library/react";
import Form from "components/Form";
import Home from "components/Home";

afterEach(cleanup);

it("renders without crashing", () => {
  render(<Form />);
});

it("shows correct input", () => {
  const result = render(<Home />);
  const input = result.container.querySelector("#inputLocation");
  fireEvent.change(input, { target: { value: "London" } });
  expect((input, "London")).toBe("London");
});

it("Submiting form without input shows Error", async () => {
  const result = render(<Home />);
  const button = result.getByText("Submit");
  fireEvent.click(button);
  const output = await screen.findByText("Please type a city name!");
  expect((output, "Please type a city name!")).toBe("Please type a city name!");
});

it("Shows Error if Cant find a matched City", () => {
  const result = render(<Home />);
  const input = result.container.querySelector("#inputLocation");
  fireEvent.change(input, { target: { value: "Toronto" } });
  const button = result.getByText("Submit");
  fireEvent.click(button);
  expect(result.getByText("Loading.....")).toBeInTheDocument();
});
