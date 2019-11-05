import React, { useContext, useState } from "react";

import Form from "../../utils/Form";
import { DataContext } from "../../utils/DataProvider";

const Grant = props => {
  const ctx = useContext(DataContext);

  const [disabled, setDisabled] = useState(true);

  const onChange = (key, value, target) => {
    ctx.setInput(input => {
      let e = { ...input };
      e.grant[key] = value;

      if (value === null || value === undefined || value.trim().length === 0) {
        target.classList.remove("is-valid");
        target.classList.remove("is-invalid");
      } else if (value.length > 0) {
        target.classList.add("is-valid");
      }

      const _disabled = Object.keys(e.bob).reduce((p, c) => {
        const _value = e.decrypt[c];
        return (
          p &&
          (_value !== null && _value !== undefined && _value.trim().length > 0)
        );
      }, true);
      setDisabled(!_disabled);

      return e;
    });
  };

  return (
    <Form
      keys={ctx.input.grant}
      buttonText="Grant"
      onChange={onChange}
      autofill={true}
      disabled={disabled}
    />
  );
};

export default Grant;
