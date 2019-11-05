import React, { useContext, useState } from "react";

import Form from "../../utils/Form";
import { DataContext } from "../../utils/DataProvider";

const Decrypt = props => {
  const ctx = useContext(DataContext);

  const [disabled, setDisabled] = useState(true);

  const onChange = (key, value, target) => {
    ctx.setInput(input => {
      let e = { ...input };
      e.decrypt[key] = value;

      if (value === null || value === undefined || value.trim().length === 0) {
        target.classList.remove("is-valid");
        target.classList.remove("is-invalid");
      } else if (value.length > 0) {
        target.classList.add("is-valid");
      }

      const _disabled = Object.keys(e.decrypt).reduce((p, c) => {
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
      onChange={onChange}
      keys={ctx.input.decrypt}
      buttonText="Decrypt"
      disabledKey="plaintext"
      disabled={disabled}
    />
  );
};

export default Decrypt;
