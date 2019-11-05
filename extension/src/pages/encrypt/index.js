import React, { useContext, useState } from "react";

import Form from "../../utils/Form";
import { DataContext } from "../../utils/DataProvider";

const Encrypt = props => {
  const ctx = useContext(DataContext);

  const [disabled, setDisabled] = useState(true);

  const onChange = (key, value, target) => {
    ctx.setInput(input => {
      let e = { ...input };
      e.encrypt[key] = value;

      if (value === null || value === undefined || value.trim().length === 0) {
        target.classList.remove("is-valid");
        target.classList.remove("is-invalid");
      } else if (value.length > 0) {
        target.classList.add("is-valid");
      }

      const _disabled = Object.keys(e.encrypt).reduce((p, c) => {
        const _value = e.encrypt[c];
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
      keys={ctx.input.encrypt}
      buttonText="Encrypt"
      disabledKey="encrypted"
      disabled={disabled}
    />
  );
};

export default Encrypt;
