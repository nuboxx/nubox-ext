import React, { useContext, useState } from "react";

import Api from "../../utils/Api";
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

  const onClick = async () => {
    try {
      const result = await Api.encrypt({
        plaintext: ctx.encrypt.plaintext,
        label: ctx.encrypt.label
      });

      if (result && result.encrypted) {
        ctx.setInput(input => {
          const e = { ...input };
          e.encrypt.encrypted = result.encrypted;

          return e;
        });
      }
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  return (
    <Form
      onChange={onChange}
      keys={ctx.input.encrypt}
      buttonText="Encrypt"
      disabledKey={["encrypted"]}
      disabled={disabled}
      onClick={onClick}
    />
  );
};

export default Encrypt;
