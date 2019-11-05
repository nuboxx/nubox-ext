import React, { useContext } from "react";

import Form from "../../utils/Form";
import { DataContext } from "../../utils/DataProvider";

const Encrypt = props => {
  const ctx = useContext(DataContext);

  const onChange = (key, value) => {
    ctx.setInput(input => {
      let e = { ...input };
      e.encrypt[key] = value;

      return e;
    });
  };

  return (
    <Form
      onChange={onChange}
      keys={ctx.input.encrypt}
      buttonText="Encrypt"
      disabledKey="encrypted"
    />
  );
};

export default Encrypt;
