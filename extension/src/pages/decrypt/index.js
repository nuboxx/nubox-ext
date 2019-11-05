import React, { useContext } from "react";

import Form from "../../utils/Form";
import { DataContext } from "../../utils/DataProvider";

const Decrypt = props => {
  const ctx = useContext(DataContext);

  const onChange = (key, value) => {
    ctx.setInput(input => {
      let e = { ...input };
      e.decrypt[key] = value;

      return e;
    });
  };

  return (
    <Form
      onChange={onChange}
      keys={ctx.input.decrypt}
      buttonText="Decrypt"
      disabledKey="plaintext"
    />
  );
};

export default Decrypt;
