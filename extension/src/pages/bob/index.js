import React, { useContext } from "react";

import Form from "../../utils/Form";
import { DataContext } from "../../utils/DataProvider";

const Bob = props => {
  const ctx = useContext(DataContext);

  const onChange = (key, value) => {
    ctx.setInput(input => {
      let e = { ...input };
      e.bob[key] = value;

      return e;
    });
  };

  return (
    <Form
      onChange={onChange}
      keys={ctx.input.bob}
      buttonText="Get Bob's keys"
    />
  );
};

export default Bob;
