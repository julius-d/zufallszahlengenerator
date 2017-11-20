import React from "react";
import App from "./App";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

describe("App", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("creates random numbers", () => {
    expect(wrapper.find("ResultList").props().randomNumbers.length).toEqual(0);
    wrapper.find("button").simulate("click");
    expect(wrapper.find("ResultList").props().randomNumbers.length).toEqual(1);
    wrapper.find("button").simulate("click");
    expect(wrapper.find("ResultList").props().randomNumbers.length).toEqual(2);
  });

  it("max value can be changed", () => {
    expect(wrapper.state().maxValue).toEqual(32);
    wrapper
      .find("input#max")
      .simulate("change", { target: { value: "10", name: "maxValue" } });
    expect(wrapper.state().maxValue).toEqual(10);
  });

  it("min value can be changed", () => {
    expect(wrapper.state().minValue).toEqual(1);
    wrapper
      .find("input#min")
      .simulate("change", { target: { value: "2", name: "minValue" } });
    expect(wrapper.state().minValue).toEqual(2);
  });

  function enableLottoMode() {
    wrapper
      .find("input#lotto")
      .simulate("change", { target: { checked: true } });
  }

  it("changes button name", () => {
    expect(wrapper.state().lotto).toEqual(false);
    expect(wrapper.find("button").text()).toEqual("Würfeln");
    enableLottoMode();
    expect(wrapper.state().lotto).toEqual(true);

    expect(wrapper.find("button").text()).toEqual("Zahl ziehen");
  });

  it("creates all possible loto numbers", () => {
    enableLottoMode();
    wrapper
      .find("input#max")
      .simulate("change", { target: { value: "10", name: "maxValue" } });
    expect(wrapper.find("ResultList").props().randomNumbers.length).toEqual(0);
    for (let i = 0; i < 10; i++) {
      wrapper.find("button").simulate("click");
    }
    let randomNumbers = wrapper.find("ResultList").props().randomNumbers;

    expect(randomNumbers).toHaveLength(10);
    expect(randomNumbers).toContain(1);
    expect(randomNumbers).toContain(2);
    expect(randomNumbers).toContain(3);
    expect(randomNumbers).toContain(4);
    expect(randomNumbers).toContain(5);
    expect(randomNumbers).toContain(6);
    expect(randomNumbers).toContain(7);
    expect(randomNumbers).toContain(8);
    expect(randomNumbers).toContain(9);
    expect(randomNumbers).toContain(10);
  });

  it("does not fail on choosing one number more than possible", () => {
    enableLottoMode();
    wrapper
      .find("input#max")
      .simulate("change", { target: { value: "2", name: "maxValue" } });
    wrapper.find("button").simulate("click");
    wrapper.find("button").simulate("click");
    wrapper.find("button").simulate("click");
  });
});
