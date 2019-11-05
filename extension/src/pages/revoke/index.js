import React, { useContext, useState } from "react";

import Api from "../../utils/Api";
import Form from "../../utils/Form";
import { DataContext } from "../../utils/DataProvider";

const Revoke = props => {
  const ctx = useContext(DataContext);

  const [disabled, setDisabled] = useState(true);

  const onChange = (key, value, target) => {
    ctx.setInput(input => {
      let e = { ...input };
      e.revoke[key] = value;

      if (value === null || value === undefined || value.trim().length === 0) {
        target.classList.remove("is-valid");
        target.classList.remove("is-invalid");
      } else if (value.length > 0) {
        target.classList.add("is-valid");
      }

      const _disabled = Object.keys(e.revoke).reduce((p, c) => {
        const _value = e.revoke[c];
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
      const result = await Api.revoke({
        label: ctx.revoke.label,
        bvk: ctx.revoke.bob_verifying_key
      });

      if (result && result.revoke) {
      }
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const autofillClick = async () => {
    try {
      const result = await Api.getBobKeys();
      if (result && result.bek && result.bvk) {
        ctx.setInput(input => {
          const e = { ...input };
          e.revoke.bob_verifying_key = result.bvk;

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
      keys={ctx.input.revoke}
      buttonText="Revoke"
      autofill={true}
      disabled={disabled}
      onClick={onClick}
      autofillClick={autofillClick}
    />
  );
};

export default Revoke;
