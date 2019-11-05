import React, { useContext } from "react";

import Form from "../../utils/Form";
import { DataContext } from "../../utils/DataProvider";

const Grant = props => {
  const ctx = useContext(DataContext);

  const onChange = (key, value) => {
    ctx.setInput(input => {
      let e = { ...input };
      e.grant[key] = value;

      return e;
    });
  };

  return (
    <Form
      keys={ctx.input.grant}
      buttonText="Grant"
      onChange={onChange}
      autofill={true}
    />
  );
};

export default Grant;
