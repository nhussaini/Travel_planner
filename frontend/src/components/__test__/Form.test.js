import {
  render,
  cleanup,
  fireEvent,
  screen,
  prettyDOM,
} from "@testing-library/react";
import Form from "components/Form";
import Home from "components/Home";

afterEach(cleanup);

// const setup = () => {
//   const form = render(<Form />);
//   const input = form.getByLabelText("cost-input");
//   return {
//     input,
//     ...form,
//   };
// };

it("renders without crashing", () => {
  render(<Form />);
});

it("shows correct input", () => {
  const result = render(<Home />);
  const input = result.container.querySelector("#inputLocation");
  console.log(prettyDOM(input));

  fireEvent.change(input, { target: { value: "London" } });
  expect((input, "London")).toBe("London");
});
