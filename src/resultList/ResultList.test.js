import React from 'react';
import renderer from 'react-test-renderer';
import ResultList from "./ResultList";

describe("ResultList", () => {

  it('renders correctly', () => {
    const tree = renderer.create(
      <ResultList randomNumbers={[1337,42]}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
