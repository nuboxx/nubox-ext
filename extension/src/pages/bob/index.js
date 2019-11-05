import React, { useContext } from "react";

import Api from "../../utils/Api";
import Form from "../../utils/Form";
import { DataContext } from "../../utils/DataProvider";

const Bob = props => {
  const ctx = useContext(DataContext);

  const onClick = async () => {
    try {
      const result = await Api.getBobKeys();
      if (result && result.bek && result.bvk) {
        ctx.setInput(input => {
          const e = { ...input };
          e.bob.encrypting_key = result.bek;
          e.bob.verifying_key = result.bvk;

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
      keys={ctx.input.bob}
      buttonText="Get Bob's keys"
      disabledKey={["encrypting_key", "verifying_key"]}
      onClick={onClick}
    />
  );
};

export default Bob;
