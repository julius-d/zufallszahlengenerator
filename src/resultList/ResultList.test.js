import React from "react";
import ResultList from "./ResultList";
import { mount } from "enzyme";

describe("ResultList", () => {
  it("renders correctly", () => {
    const tree = mount(<ResultList randomNumbers={[1337, 42]} />);
    expect(tree).toMatchSnapshot();
  });
});
