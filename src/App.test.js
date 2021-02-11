import React from "react";
import App from "./App";
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
    changeMaxValueTo("10");
    expect(wrapper.state().maxValue).toEqual(10);
  });

  it("min value can be changed", () => {
    expect(wrapper.state().minValue).toEqual(1);
    changeMinValueTo("2");
    expect(wrapper.state().minValue).toEqual(2);
  });

  it("max value is limited to 1000000000", () => {
    expect(wrapper.state().maxValue).toEqual(32);
    changeMaxValueTo("90000000009");
    expect(wrapper.state().maxValue).toEqual(1000000000);
  });

  it("max value cannot be chars", () => {
    expect(wrapper.state().maxValue).toEqual(32);
    changeMaxValueTo("foo");
    expect(wrapper.state().maxValue).toEqual("");
  });

  function enableLottoMode() {
    wrapper
      .find("input#lotto")
      .simulate("change", { target: { checked: true } });
  }

  function changeMaxValueTo(value) {
    wrapper
      .find("input#max")
      .simulate("change", { target: { value: value, name: "maxValue" } });
  }

  function changeMinValueTo(value) {
    wrapper
      .find("input#min")
      .simulate("change", { target: { value: value, name: "minValue" } });
  }

  it("changes button name", () => {
    expect(wrapper.state().lotto).toEqual(false);
    expect(wrapper.find("button").text()).toEqual("Würfeln");
    enableLottoMode();

    expect(wrapper.state().lotto).toEqual(true);
    expect(wrapper.find("button").text()).toEqual("Zahl ziehen");
  });

  it("creates all possible lotto numbers", () => {
    enableLottoMode();
    changeMaxValueTo("10");
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
    changeMaxValueTo("2");
    wrapper.find("button").simulate("click");
    wrapper.find("button").simulate("click");
    wrapper.find("button").simulate("click");
  });
});
