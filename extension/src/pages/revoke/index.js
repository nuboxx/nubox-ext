import React, { useContext } from "react";

import { Card } from "react-bootstrap";

import Form from "../../utils/Form";
import { DataContext } from "../../utils/DataProvider";

const Revoke = props => {
  const ctx = useContext(DataContext);

  const onChange = (key, value) => {
    ctx.setInput(input => {
      let e = { ...input };
      e.revoke[key] = value;

      return e;
    });
  };

  return (
    <Card>
      <Card.Body>
        <Form
          onChange={onChange}
          keys={ctx.input.revoke}
          buttonText="Revoke"
          autofill={true}
        />
      </Card.Body>
    </Card>
  );
};

export default Revoke;
