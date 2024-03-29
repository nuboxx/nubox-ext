import React, { useContext, useState } from "react";

import isDate from "date-fns/isDate";

import Api from "../../utils/Api";
import Form from "../../utils/Form";
import { DataContext } from "../../utils/DataProvider";

const Grant = props => {
  const ctx = useContext(DataContext);

  const [disabled, setDisabled] = useState(true);

  const onChange = (key, value, target) => {
    ctx.setInput(input => {
      let e = { ...input };
      e.grant[key] = value;

      if (target) {
        if (
          value === null ||
          value === undefined ||
          value.trim().length === 0
        ) {
          target.classList.remove("is-valid");
          target.classList.remove("is-invalid");
        } else if (value.length > 0) {
          target.classList.add("is-valid");
        }
      }

      const _disabled = Object.keys(e.grant).reduce((p, c) => {
        const _value = e.grant[c];
        return (
          p &&
          (_value !== null &&
            _value !== undefined &&
            (isDate(_value) || _value.trim().length > 0))
        );
      }, true);
      setDisabled(!_disabled);

      return e;
    });
  };

  const onClick = async () => {
    try {
      const result = await Api.grant({
        encrypted: ctx.grant.encrypted,
        label: ctx.grant.label,
        bek: ctx.grant.bob_encrypting_key,
        bvk: ctx.grant.bob_verifying_key
      });

      if (result && result.grant) {
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
          e.grant.bob_encrypting_key = result.bek;
          e.grant.bob_verifying_key = result.bvk;

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
      keys={ctx.input.grant}
      buttonText="Grant"
      onChange={onChange}
      autofill={true}
      disabled={disabled}
      onClick={onClick}
      autofillClick={autofillClick}
    />
  );
};

export default Grant;
